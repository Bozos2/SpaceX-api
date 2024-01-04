import React, { useState, ChangeEvent } from "react";

type FiltersProps = {
  onFilterChange: (filters: FiltersState) => void;
};

export type FiltersState = {
  selectedStatus: string | null;
  selectedDate: string | null;
  selectedType: string | null;
};

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleStatusChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(event.target.value);
    onFilterChange({
      selectedStatus: event.target.value,
      selectedDate,
      selectedType,
    });
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
    onFilterChange({
      selectedStatus,
      selectedDate: event.target.value,
      selectedType,
    });
  };

  const handleTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
    onFilterChange({
      selectedStatus,
      selectedDate,
      selectedType: event.target.value,
    });
  };

  return (
    <section className="flex flex-col justify-center items-center  text-white font-roboto">
      <label className="text-2xl tracking-wide pb-2" htmlFor="Filters">
        Sort by
      </label>
      <div className="flex flex-col xl:flex-row gap-4">
        <div className="flex flex-col">
          <label htmlFor="status">Status</label>
          <div className="relative inline-block">
            <select
              className="rounded-lg bg-slate-800 border border-white w-56 xl:w-80 px-2 py-2 sm:px-4 sm:py-3 focus:outline-none text-white sm:text-xl appearance-none"
              id="status"
              value={selectedStatus}
              onChange={handleStatusChange}
            >
              <option value="" disabled hidden>
                Pick status...
              </option>
              <option value="retired">Retired</option>
              <option value="active">Active</option>
              <option value="unknown">Unknown</option>
              <option value="destroyed">Destroyed</option>
            </select>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                className="h-6 w-6 fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6z" />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="age">Original Launch</label>
          <div className="relative inline-block">
            <input
              type="date"
              id="age"
              className="rounded-lg bg-slate-800 border border-white w-56 xl:w-80 px-2 py-2 sm:px-4 sm:py-3 focus:outline-none text-white sm:text-xl appearance-none"
              onChange={handleDateChange}
              value={selectedDate}
              required
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="type">Type</label>
          <div className="relative inline-block ">
            <select
              className="rounded-lg bg-slate-800 border border-white w-56 xl:w-80 px-2 py-2 sm:px-4 sm:py-3 focus:outline-none text-white sm:text-xl appearance-none"
              id="type"
              value={selectedType}
              onChange={handleTypeChange}
            >
              <option value="" disabled hidden>
                Pick type...
              </option>
              <option value="Dragon 1.0">Dragon 1.0</option>
              <option value="Dragon 1.1">Dragon 1.1</option>
              <option value="Dragon 2.0">Dragon 2.0</option>
            </select>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                className="h-6 w-6 fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filters;
