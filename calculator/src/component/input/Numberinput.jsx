import React from "react";
import "./Numberinput.css";

const Numberinput = ({ input, setInput }) => {
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <input
        type="number"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter a number"
        className="number-input"
      />
    </>
  );
};

export default Numberinput;
