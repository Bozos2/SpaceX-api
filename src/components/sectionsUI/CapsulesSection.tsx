import React, { useState, useEffect } from "react";
import Filters from "../UI/Filters";
import Card from "../UI/Card";
import DetailModal from "../UI/DetailModal";
import { FiltersState } from "../UI/Filters";

type CapsuleData = {
  capsule_serial: string;
  type: string;
  status: string;
  landings: number;
  original_launch: string | null;
  details: string | null;
};

const CapsuleSection = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedCapsule, setSelectedCapsule] = useState<CapsuleData>();
  const [data, setData] = useState<CapsuleData[] | null>(null);
  const [filters, setFilters] = useState<FiltersState>({
    selectedStatus: "",
    selectedDate: "",
    selectedType: "",
  });
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchData = async () => {
    try {
      const { selectedStatus, selectedDate, selectedType } = filters;

      const apiUrl = `http://localhost:3001/api/data/?${
        selectedType ? `type=${selectedType}&` : ""
      }${selectedStatus ? `status=${selectedStatus}&` : ""}${
        selectedDate ? `original_launch=${selectedDate}&` : ""
      }&page=${currentPage}&limit=10`;

      const response = await fetch(apiUrl);
      const fetchedData = await response.json();
      console.log("Fetched Data:", fetchedData);
      setData(fetchedData.paginate);
    } catch (error) {
      console.error("Error during GET request:", error);
    }
  };

  useEffect(() => {
    const fetchDataAndSetData = async () => {
      console.log("tset", filters);
      await fetchData();
    };

    fetchDataAndSetData();
  }, [filters, currentPage]);

  const openModalHandler = (capsuleData: CapsuleData) => {
    setSelectedCapsule(capsuleData);
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <section
      id="Capsules"
      className="min-h-screen bg-slate-800 font-roboto px-4"
    >
      <div className="flex justify-center pt-12">
        <Filters onFilterChange={setFilters} />
      </div>
      {data && data.length > 0 ? (
        <>
          <div className="mt-24 pb-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-items-center gap-8">
            {data &&
              data.map((capsule, i) => (
                <Card
                  key={i}
                  type={capsule.type}
                  originallaunch={capsule.original_launch}
                  curstatus={capsule.status}
                  onCardClick={() => openModalHandler(capsule)}
                />
              ))}
            {showModal && (
              <DetailModal
                onClose={closeModalHandler}
                capsule_serial={selectedCapsule!.capsule_serial}
                type={selectedCapsule!.type}
                status={selectedCapsule!.status}
                landings={selectedCapsule!.landings}
                original_launch={selectedCapsule?.original_launch || ""}
                details={selectedCapsule?.details || ""}
              />
            )}
          </div>
          <div className="w-full flex py-4 justify-center items-center gap-2 text-white">
            <button
              className="text-5xl disabled:cursor-not-allowed"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              &#11164;
            </button>

            <p className="rounded-full w-10 h-10 text-lg font-medium  border-2 flex justify-center items-center">
              {currentPage}
            </p>

            <button
              className="text-5xl disabled:cursor-not-allowed"
              onClick={handleNextPage}
              disabled={data ? data.length < 10 : true}
            >
              &#11166;
            </button>
          </div>
        </>
      ) : (
        <p className="text-white text-center  mt-24 sm:mt-56 xl:mt-80 text-4xl flex justify-center items-center">
          There is no data in our database.
        </p>
      )}
    </section>
  );
};

export default CapsuleSection;
