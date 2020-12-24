import { useState } from "react";

function SearchBar(props) {
  const { onSearch } = props;
  const [query, setQuery] = useState("😀");
  const handleOnChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleOnChange}
      className="border-4 text-3xl"
    ></input>
  );
}

export default SearchBar;
