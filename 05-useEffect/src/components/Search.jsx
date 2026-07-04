import React, { useState, useEffect } from "react";

const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Grapes",
  "Pineapple",
  "Papaya",
  "Watermelon",
  "Strawberry",
  "Blueberry",
  "Cherry",
  "Peach",
  "Pear",
  "Kiwi",
  "Guava",
  "Pomegranate",
  "Lemon",
  "Lime",
  "Coconut",
  "Avocado",
  "Dragon Fruit",
  "Jackfruit",
  "Lychee",
  "Plum",
  "Apricot",
  "Fig",
  "Date",
  "Raspberry",
  "Blackberry",
  "Cranberry",
  "Passion Fruit",
  "Star Fruit",
  "Custard Apple",
  "Sapodilla",
  "Mulberry",
  "Persimmon",
  "Durian",
  "Rambutan",
  "Longan",
  "Gooseberry",
];

const Search = () => {
  // Search input
  const [search, setSearch] = useState("");

  // Filtered results
  const [results, setResults] = useState([]);

  // Loading state
  const [load, setLoad] = useState(false);

  useEffect(() => {
    // If input is empty, clear results
    if (!search.trim()) {
      setResults([]);
      setLoad(false);
      return;
    }

    setLoad(true);

    // Simulate API delay
    const timer = setTimeout(() => {
      const filtered = fruits.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
      );

      setResults(filtered);
      setLoad(false);
    }, 500);

    // Cleanup timeout
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div style={{ width: "300px", margin: "20px auto" }}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search fruits..."
        style={{
          padding: "8px",
          width: "100%",
          fontSize: "16px",
        }}
      />

      {/* Loading */}
      {load && <p>Searching fruits...</p>}

      {/* No results */}
      {!load && search.trim() !== "" && results.length === 0 && (
        <p>No results found.</p>
      )}

      {/* Results */}
      {!load && results.length > 0 && (
        <ul>
          {results.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;