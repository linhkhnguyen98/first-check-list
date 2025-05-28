import React, { useState } from 'react';

const LIST_ITEMS = [
  { id: 1, name: "Leak Check" },
  { id: 2, name: "Bristol" },
  { id: 3, name: "FSR Cal" },
  { id: 4, name: "System Cal" },
  { id: 5, name: "WLM Offset" },
  { id: 6, name: "Threshold Stats" },
  { id: 7, name: "Temp Cycling" },
  { id: 8, name: "Baseline Cal" },
  { id: 9, name: "Pressure Cal" },
  { id: 10, name: "Etalon Temp" },
];

const DropDownList = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown visibility

  const handleCheckboxChange = (itemName) => {
    const updatedValue = value.includes(itemName)
      ? value.filter((item) => item !== itemName) // Remove item if already selected
      : [...value, itemName]; // Add item if not selected
    onChange(updatedValue); // Update parent state
  };

  return (
    <div className="dropdown-container">
      <div
        className="dropdown-header"
        onClick={() => setIsOpen(!isOpen)} // Toggle dropdown visibility
      >
        {value.length > 0 ? value.join(", ") : "Select tasks"} ▼
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          {LIST_ITEMS.map((item) => (
            <div key={item.id} className="dropdown-item">
              <input
                type="checkbox"
                id={`checkbox-${item.id}`}
                checked={value.includes(item.name)}
                onChange={() => handleCheckboxChange(item.name)}
              />
              <label htmlFor={`checkbox-${item.id}`}>{item.name}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownList;