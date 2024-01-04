import React, { useState, useEffect } from "react";
import LogoIcon from "../assets/logo/logoIcon";

const Navbar = () => {
  const [color, setColor] = useState<string>("transparent");

  // Change background color when scrolling down the page.
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#0f172a");
      } else {
        setColor("transparent");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <nav
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10"
    >
      <div className="py-2 pl-4 sm:pl-12">
        <LogoIcon />
      </div>
    </nav>
  );
};

export default Navbar;
