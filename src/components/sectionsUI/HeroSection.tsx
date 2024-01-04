import React from "react";

const HeroSection = () => {
  return (
    <div className="flex items-center h-screen  bg-fixed bg-center bg-cover custom-img">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="max-w-4xl px-4 sm:pl-12 py-5 text-white z-[2] mt-[-10rem] font-roboto">
        <h2 className="text-4xl sm:text-7xl font-bold text-center pt-12">
          TA Data
        </h2>
        <p className="sm:py-5 text-lg mt-2 text-center opacity-70">
          Welcome to our SpaceX Rockets Hub! Discover the incredible world of
          SpaceX, where innovation meets the stars. Explore the iconic Falcon 9,
          a reusable marvel launching satellites into orbit. Witness the power
          of Falcon Heavy, lifting payloads to new heights. Look to the future
          with Starship, SpaceX's vision for interplanetary travel. Join us on a
          journey through the cosmos!
        </p>
        <div className="flex justify-center">
          <a
            className="text-xl pt-4 sm:pt-2 tracking-wider flex transition-transform transform hover:translate-y-2 bounce hover:cursor-pointer"
            onClick={() => {
              const nextSection = document.getElementById("Capsules");
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            See more
            <span className="pl-2 pt-0.5">&#9660;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
