import React from "react";
import Button from "./Button";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-around items-center py-4 md:py-8">
        <h1 className="font-bold text-base sm:text-lg md:text-2xl">Wai Yan</h1>
        <div>
          <Button
            text="Home"
            variant="secondary"
            className="text-xs md:text-base px-2 md:px-4"
          />
          <Button
            text="About"
            variant="secondary"
            className="text-xs md:text-base px-2 md:px-4"
          />
          <Button
            text="Gallery"
            variant="secondary"
            className="text-xs md:text-base px-2 md:px-4"
          />
        </div>
        <Button text="Contact" className="text-xs md:text-base px-2 md:px-4" />
      </div>
    </>
  );
};

export default NavBar;
