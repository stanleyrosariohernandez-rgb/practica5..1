
function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">

      <span className="search-icon">🔎</span>

      <input
        type="text"
        placeholder="Buscar una receta..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search && (
        <button onClick={() => setSearch("")}>
          ✕
        </button>
      )}

    </div>
  );
}

export default SearchBar;
