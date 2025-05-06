import React from 'react';

const LIST_ITEMS = [
  { id: 1, name: "Leak Check" },
  { id: 2, name: "Bristol" },
  { id: 3, name: "FSR Cal" },
  { id: 4, name: "System Cal" },
  { id: 5, name: "WLM Offset" },
  { id: 6, name: "Threshold Stats" },
  { id: 7, name: "Temp Cyling" },
  { id: 8, name: "Baseline Cal" },
  { id: 9, name: "Pressure Cal" },
  { id: 10, name: "Etalon Temp" }
];

const DropDownList = ({value, onChange}) => {
    return (
        <div className="selectBox">
            <div className="checkBoxes">
                {LIST_ITEMS.map((item) => (
                    <label key={item.id} htmlFor={`checkbox-${item.id}`}>
                        <input
                            type="checkbox"
                            id={`checkbox-${item.id}`}
                            name={item.name}
                            value={item.name}
                            onChange={(e) => onChange(e.target.value)}
                        />
                        {item.name}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default DropDownList;