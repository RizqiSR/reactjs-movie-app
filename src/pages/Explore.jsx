import Navbar from "../components/Navbar/Navbar";
// import Header from "../components/Header/Header";
// import HomeHeader from "../components/Header/HomeHeader";
import Main from "../components/Main/Main";
import MovieCards from "../components/Cards/MovieCards";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Explore = ({handleSubmitQuery, query, setQuery, movies, truncateOverview}) => {
  const explorePageStyle = {
    marginTop: "2em",
    padding: "0 50px"
  }

  const navigate = useNavigate()
  
  const handleSearchSubmit = (e) => {
    handleSubmitQuery(e);
    navigate(`/movie/explore?search_query=${query}`);
  };

  return (
    <>
      <Navbar handleSubmitQuery={handleSearchSubmit} query={query} setQuery={setQuery} />
      {/* <Header>
        <HomeHeader />
      </Header> */}
      <h1 className="text-white" style={explorePageStyle}>Searched Movies</h1>
      <Main>
        <MovieCards movies={movies} truncateOverview={truncateOverview} />
      </Main>
      <Footer />
    </>
  );
};

export default Explore;
