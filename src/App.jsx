import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import { getMovieList, searchMovies } from "./utils/fetchDataAPI";
import { truncateOverview } from "./utils/truncateCharsOverview";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MovieDetails from "./pages/MovieDetails";
import Explore from "./pages/Explore";
import { TruncateReview } from "./utils/truncateCharsReview";
import Layout from "./components/Layout";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const handleSubmitQuery = (e) => {
    e.preventDefault();

    if (query.length > 3) {
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
    <Router>
      <Routes>
        <Route element={<Layout handleSubmitQuery={handleSubmitQuery} query={query} setQuery={setQuery} movies={movies} setMovies={setMovies} />}>
          <Route path="/" element={<Home movies={movies} setMovies={setMovies} truncateOverview={truncateOverview} />} />
          <Route path="/movie/:movieDetailsURL" element={<MovieDetails truncateOverview={truncateOverview} TruncateReview={TruncateReview} />} />
          <Route path="/explore" element={<Explore movies={movies} truncateOverview={truncateOverview} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
