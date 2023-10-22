import "./App.css";
import { useEffect, useState } from "react";
import { getMovieList, searchMovies } from "./utils/fetchDataAPI";
import { truncateOverview } from "./utils/truncateCharsOverview";
import Navbar from "./components/Navbar/Navbar";
import NavBrand from "./components/Navbar/NavBrand";
import NavList from "./components/Navbar/NavList";
import NavSearchInput from "./components/Navbar/NavSearchInput";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import MovieCards from "./components/Main/MovieCards";
import Footer from "./components/Footer/Footer";

const navContents = ["Home", "Movies", "TV Shows", "More"];

function App() {
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
      <Navbar>
        <NavBrand />
        <NavList navContents={navContents} />
        <NavSearchInput handleSubmitQuery={handleSubmitQuery} query={query} setQuery={setQuery} />
      </Navbar>
      <Header />
      <Main>
        <MovieCards movies={movies} truncateOverview={truncateOverview} />
      </Main>
      <Footer />
    </>
  );
}

export default App;
