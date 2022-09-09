import "./App.css";
import { useState, useEffect } from "react";

const data = [
  { id: 1, name: "Alabama" },
  { id: 2, name: "Alaska" },
];

function App() {
  const [selectedValues, setSelectedValues] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filter = data.filter((item) => {
      item.name
        ?.toLowerCase()
        ?.startsWith(selectedValues[selectedValues.length - 1]?.toLowerCase());
    });
    setFilteredData(filter || []);
  }, [selectedValues]);

  return (
    <div className="App">
      <input
        value={selectedValues}
        onChange={(e) => {
          console.log(e.target.value);
          setSelectedValues(e.target.value.split(","));
        }}
      />
      <button
        onClick={() => {
          setSelectedValues([...selectedValues, "TEST"]);
        }}
      >
        Submit
      </button>
      <ul>
        {filteredData?.map((item) => (
          <li
            onClick={(e) => {
              setSelectedValues((oldValue) => [
                ...oldValue.slice(0, -1),
                item.name + ",",
              ]);
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
