import React, { useState } from "react";
import "./AddItems.css";

const AddItems = ({ setItems }) => {
  const [input, setInput] = useState("");
  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };
  const add = () => {
    setItems((i) => [...i, { text: input, bought: false }]);
    setInput("");
  };
  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      add();
    }
  };
  return (
    <div className="add-items-container">
      <input
        type="text"
        placeholder="Add a new item"
        value={input}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
      />
      <button onClick={add}>Add</button>
    </div>
  );
};

export default AddItems;
