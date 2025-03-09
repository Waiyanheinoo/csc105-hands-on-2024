import React, { useState } from "react";
import "./DisplayList.css";

const DisplayList = ({ items, setItems }) => {
  const remove = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const startEdit = (index) => {
    setEditIndex(index);
    setEditValue(items[index].text);
  };
  const saveEdit = (index) => {
    const updatedItems = [...items];
    updatedItems[index].text = editValue;
    setItems(updatedItems);
    setEditIndex(null);
  };
  const toggleBought = (index) => {
    const updatedItems = [...items];
    updatedItems[index].bought = !updatedItems[index].bought;
    setItems(updatedItems);
  };
  return (
    <div className="item-list">
      {items.map((i, index) => (
        <div key={index} className="item" onClick={() => toggleBought(index)}>
          {editIndex === index ? (
            <input
              className="edit-input"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  saveEdit(index);
                }
              }}
              autoFocus
            />
          ) : (
            <div className={`item-text ${i.bought ? "bought" : ""}`}>
              {i.text}
            </div>
          )}
          <div className="button-group">
            {editIndex === index ? (
              <button
                className="save-button"
                onClick={(e) => {
                  e.stopPropagation();
                  saveEdit(index);
                }}
              >
                Save
              </button>
            ) : (
              <button
                className="edit-button"
                onClick={(e) => {
                  e.stopPropagation();
                  startEdit(index);
                }}
              >
                Edit
              </button>
            )}
            <button
              className="remove-button"
              onClick={(e) => {
                e.stopPropagation();
                remove(index);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayList;
