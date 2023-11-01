import Main from "../components/Main/Main";
import MovieCards from "../components/Cards/MovieCards";

const Explore = ({movies, truncateOverview}) => {
  const explorePageStyle = {
    marginTop: "2em",
    padding: "0 50px"
  }

  return (
    <>
      <h1 className="text-white" style={explorePageStyle}>Searched Movies</h1>
      <Main>
        <MovieCards movies={movies} truncateOverview={truncateOverview} />
      </Main>
    </>
  );
};

export default Explore;
