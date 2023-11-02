import Main from "../components/Main/Main";
import MovieCards from "../components/Cards/MovieCards";

const Explore = ({movies, truncateOverview}) => {
  return (
    <>
      <h1 className="explore-page-title text-white px-5">Searched Movies</h1>
      <Main>
        <MovieCards movies={movies} truncateOverview={truncateOverview} />
      </Main>
    </>
  );
};

export default Explore;
