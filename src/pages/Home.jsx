import { useEffect, useState } from "react";
import { getMovieList, searchMovies } from "../utils/fetchDataAPI";
import { truncateOverview } from "../utils/truncateCharsOverview";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import HomeHeader from "../components/Header/HomeHeader";
import Main from "../components/Main/Main";
import MovieCards from "../components/Cards/MovieCards";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const handleSubmitQuery = (e) => {
    e.preventDefault();

    if (query.length > 4) {
      searchMovies(query).then((res) => {
        const filteredSearchedMovies = res.filter((movie) => {
          if (movie.poster_path != null && movie.vote_average > 0) {
            return movie;
          }
        });
        setMovies(filteredSearchedMovies);
      });
    }
  };

  useEffect(() => {
    getMovieList().then((res) => {
      setMovies(res);
    });
  }, []);

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
