import { useEffect } from "react";
import { getMovieList } from "../utils/fetchDataAPI";
import Header from "../components/Header/Header";
import HomeHeader from "../components/Header/HomeHeader";
import Main from "../components/Main/Main";
import MovieCards from "../components/Cards/MovieCards";

const Home = ({movies, setMovies, truncateOverview}) => {
  useEffect(() => {
    getMovieList().then((res) => {
      setMovies(res);
    });
  }, [setMovies]);

  return (
    <>
      <Header>
        <HomeHeader />
      </Header>
      <Main>
        <MovieCards movies={movies} truncateOverview={truncateOverview} />
      </Main>
    </>
  );
};

export default Home;
