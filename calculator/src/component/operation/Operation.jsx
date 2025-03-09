import React from "react";
import "./Operation.css";

const Operation = ({ result, setResult, input, setInput }) => {
  const parseInput = () => parseInt(input) || 0;
  const add = () => setResult(result + parseInput());
  const subtract = () => setResult(result - parseInput());
  const multiply = () => setResult(result * parseInput());
  const divide = () => {
    if (parseInput() === 0) {
      alert("Cannot divide by zero");
      return;
    }
    setResult(result / parseInput());
  };
  const resetInput = () => setInput("");
  const resetResult = () => setResult(0);

  return (
    <>
      <div className="operation-container">
        <button onClick={add} className="btn">
          Add
        </button>
        <button onClick={subtract} className="btn">
          Subtract
        </button>
        <button onClick={multiply} className="btn">
          Multiply
        </button>
        <button onClick={divide} className="btn">
          Divide
        </button>
        <button onClick={resetInput} className="btn reset-input">
          Reset Input
        </button>
        <button onClick={resetResult} className="btn reset-result">
          Reset Result
        </button>
      </div>
    </>
  );
};

export default Operation;
