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
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            <option value="">Select options</option>
            {LIST_ITEMS.map((item)=>(
                <option key={item.id} value={item.name}>
                    {item.name}
                </option>
            ))}
        </select>
    );
};

export default DropDownList;