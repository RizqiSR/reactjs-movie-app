const NavSearchInput = ({ handleSubmitQuery, query, setQuery }) => {
  return (
    <form className="movie-search-input d-flex border border w-75 p-2 rounded" role="search">
      <button
        className="search-btn btn btn-info border-0 bg-transparent p-0 d-flex flex-column justify-content-center align-items-center"
        type="submit"
        onClick={handleSubmitQuery}
        style={{width: "30px"}}
      >
        <i className="bi bi-search text-info"></i>
      </button>
      <input
        className="search-input form-control bg-transparent border-0 p-0 focus-ring focus-ring-dark"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={query}
        onChange={({ target }) => setQuery(target.value)}
      />
    </form>
  );
};

export default NavSearchInput;