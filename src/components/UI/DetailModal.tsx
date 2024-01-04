import React from "react";
import ReactDOM from "react-dom";

type BackdropProps = {
  onClose: () => void;
};

type ModalOverlayProps = {
  onClose: () => void;
  capsule_serial: string | null;
  type: string;
  status: string;
  landings: number;
  original_launch: string | null;
  details: string | null;
};

const Backdrop: React.FC<BackdropProps> = (props) => {
  return (
    <div
      className="fixed inset-0 z-10 bg-black bg-opacity-75"
      onClick={props.onClose}
    />
  );
};

const ModalOverlay: React.FC<ModalOverlayProps> = (props) => {
  return (
    <div className="fixed top-56 sm:top-80 left-1/2 transform -translate-x-1/2 z-20 mx-1 font-roboto text-white sm:px-4 overflow-hidden">
      <div className=" bg-slate-800 border rounded-2xl shadow-lg  outline-0 p-2 w-[260px] sm:w-96">
        <h2 className="text-white p-2  font-semibold text-xl">
          Detail of Capsule
        </h2>
        <div className="py-4 pl-2 sm:pr-4 flex flex-col gap-1">
          <div className="flex flex-col sm:flex-row sm:gap-4">
            <h1 className="text-lg font-medium">
              Serial:{" "}
              <span className="font-light opacity-80">
                {props.capsule_serial}
              </span>
            </h1>
            <h1 className="text-lg font-medium">
              Type: <span className="font-light opacity-80">{props.type}</span>
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-4">
            <h1 className="text-lg font-medium">
              Status:{" "}
              <span className="font-light opacity-80">{props.status}</span>
            </h1>
            <h1 className="text-lg font-medium">
              Landings:{" "}
              <span className="font-light opacity-80">{props.landings}</span>
            </h1>
          </div>
          <div>
            <h1 className="text-lg font-medium">
              Launch:{" "}
              <span className="font-light opacity-80">
                {props.original_launch}
              </span>
            </h1>
          </div>

          <div>
            <h1 className="text-lg font-medium">
              Details:{" "}
              <span className="font-light opacity-80">{props.details}</span>
            </h1>
          </div>
        </div>
        <div className="p-2 flex justify-end">
          <button
            className="bg-slate-600 hover:bg-slate-900 text-white text-center font-medium tracking-widest py-2 px-4 rounded-2xl cursor-pointer focus:outline-none"
            onClick={props.onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

type DetailModalProps = {
  onClose: () => void;
  capsule_serial: string;
  type: string;
  status: string;
  original_launch: string | null;
  landings: number;
  details: string | null;
};

const DetailModal: React.FC<DetailModalProps> = (props) => {
  const backdropRoot = document.getElementById("backdrop-root");
  const overlayRoot = document.getElementById("overlay-root");

  if (!backdropRoot || !overlayRoot) {
    return null;
  }
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        backdropRoot
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onClose={props.onClose}
          capsule_serial={props.capsule_serial}
          type={props.type}
          status={props.status}
          landings={props.landings}
          original_launch={props.original_launch}
          details={props.details}
        />,
        overlayRoot
      )}
    </React.Fragment>
  );
};

export default DetailModal;
