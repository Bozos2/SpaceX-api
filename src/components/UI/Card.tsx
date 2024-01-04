import React from "react";
import capsule from "../../assets/capsule.jpg";

type CapsuleProps = {
  type: string;
  originallaunch: string | null;
  curstatus: string;
  onCardClick: () => void;
};

const Card: React.FC<CapsuleProps> = (props) => {
  return (
    <div
      className="flex flex-col max-w-xs font-roboto p-2 text-white hover:border hover:rounded-lg hover:cursor-pointer"
      onClick={props.onCardClick}
    >
      <div>
        <img src={capsule} alt="capsule" className="rounded-lg" />
      </div>
      <div className="pt-4 flex flex-col gap-2">
        <h1 className="font-medium tracking-wider text-xl">{props.type}</h1>
        <h4 className="font-light opacity-70">{props.originallaunch}</h4>
        <h4>{props.curstatus}</h4>
      </div>
    </div>
  );
};

export default Card;
