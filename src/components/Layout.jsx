import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ handleSubmitQuery, query, setQuery, movies, setMovies }) => {
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    handleSubmitQuery(e);
    navigate(`/explore?search_query=${query}`);
  };

  return (
    <>
      <Navbar
        handleSubmitQuery={handleSubmitQuery && handleSearchSubmit}
        query={query}
        setQuery={setQuery}
        movies={movies}
        setMovies={setMovies}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
