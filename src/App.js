import { useEffect, useState } from "react";

const data = [
  { id: 1, name: "Alabama" },
  { id: 2, name: "Alaska" },
];
const App = () => {
  const [selectedValues, setSelectedValues] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filter = data.filter((item) =>
      item.name
        ?.toLowerCase()
        ?.startsWith(selectedValues[selectedValues.length - 1]?.toLowerCase())
    );
    setFilteredData(filter || []);
  }, [selectedValues]);

  return (
    <div>
      <input
        value={selectedValues}
        // multiple={true}
        onChange={(e) => {
          console.log(e.target.value);
          setSelectedValues(e.target.value.split(","));
        }}
      />
      <button
        onClick={() => {
          setSelectedValues([...selectedValues, "TEST "]);
        }}
      >
        submit
      </button>
      <ul>
        {filteredData?.map((item) => (
          <li
            key={item.id}
            onClick={(e) =>
              setSelectedValues((oldValue) => [
                ...oldValue.slice(0, -1),
                item.name + ",",
              ])
            }
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
