import Navbar from "../components/Navbar/Navbar";
// import Header from "../components/Header/Header";
// import HomeHeader from "../components/Header/HomeHeader";
import Main from "../components/Main/Main";
import MovieCards from "../components/Cards/MovieCards";
import Footer from "../components/Footer/Footer";

const Explore = ({handleSubmitQuery, query, setQuery, movies, truncateOverview}) => {
  const explorePageStyle = {
    marginTop: "2em",
    padding: "0 50px"
  }
  
  return (
    <>
      <Navbar handleSubmitQuery={handleSubmitQuery} query={query} setQuery={setQuery} />
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
