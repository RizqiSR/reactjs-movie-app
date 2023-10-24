const NavSearchInput = ({ handleSubmitQuery, query, setQuery }) => {
  return (
    <form className="movie-search-input d-flex border-secondary" role="search">
      <input
        className="search-input form-control me-2 bg-info bg-opacity-10 border border-info"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={query}
        onChange={({ target }) => setQuery(target.value)}
      />
      <button
        className="search-btn btn btn-info"
        type="submit"
        onClick={handleSubmitQuery}
      >
        <i className="bi bi-search text-white"></i>
      </button>
    </form>
  );
};

export default NavSearchInput;