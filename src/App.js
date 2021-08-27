import "./App.css";
import SearchBar from "./SearchBar";
import Fuse from "fuse.js";
import emojis from "./emojis.json";

function App() {
  const fuse = new Fuse(emojis, {
    keys: ["name"],
    isCaseSensitive: false,
  });

  const onSearch = (query) => {
    const results = fuse.search(query);
    console.log(results);
  };

  return (
    <div className="container mx-auto pt-64">
      <div className="flex flex-column justify-center items-start">
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
}

export default App;
