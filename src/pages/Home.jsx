import { useEffect } from "react";
import { getMovieList } from "../utils/fetchDataAPI";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import HomeHeader from "../components/Header/HomeHeader";
import Main from "../components/Main/Main";
import MovieCards from "../components/Cards/MovieCards";
import Footer from "../components/Footer/Footer";

const Home = ({handleSubmitQuery, query, setQuery, movies, setMovies, truncateOverview}) => {
  useEffect(() => {
    getMovieList().then((res) => {
      setMovies(res);
    });
  }, [setMovies]);

  return (
    <>
      <Navbar handleSubmitQuery={handleSubmitQuery} query={query} setQuery={setQuery} />
      <Header>
        <HomeHeader />
      </Header>
      <Main>
        <MovieCards movies={movies} truncateOverview={truncateOverview} />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
