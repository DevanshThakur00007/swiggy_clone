import { useState } from "react";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value); 
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search restaurants..."
      className="border rounded-lg px-4 py-2 w-72"
    />
  );
}

export default Search;
