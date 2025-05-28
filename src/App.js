import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import './index.css';
import DropDownList from './Components/DropDownList';

function App() {
  const [tableData, setTableData] = useState([
    { rmaNumber: '', chassyNumber: '', serialNumber: '', dropdownValue: ''}]);
  const addRow = () => {
    setTableData([...tableData, {rmaNumber: '', chassyNumber: '', serialNumber: '', dropdownValue: ''}]);
  };
  const handleInputChange = (index, field, value) => {
    const updatedTableData = [...tableData];
    updatedTableData[index][field] = value;
    setTableData(updatedTableData);
  };
  const handleDropdownChange = (index, value) => {
    const updatedTableData = [...tableData];
    updatedTableData[index].dropdownValue = value;
    setTableData(updatedTableData);
  };
  return (
    <>
      <header>
        <h1>Analyzer Check List</h1>
      </header>
      <button onClick={addRow}>Add Row</button>
      <main>
        <table>
          <thead>
            <tr>
              <th>RMA Number</th>
              <th>Chassy Number</th>
              <th>Serial Number</th>
              <th>Tasks</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={row.rmaNumber}
                    onChange={(e) => handleInputChange(index, 'rmaNumber', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.chassyNumber}
                    onChange={(e) => handleInputChange(index, 'chassyNumber', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={row.serialNumber}
                    onChange={(e) => handleInputChange(index, 'serialNumber', e.target.value)}
                  />
                </td>
                <td>
                  <DropDownList
                    value={row.dropdownValue}
                    // onChange={(value) => handleInputChange(index, 'dropdownValue', value)}
                    onChange={(value) => handleDropdownChange(index, value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
export default App;
