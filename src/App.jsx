import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import { getMovieList, searchMovies } from "./utils/fetchDataAPI";
import { truncateOverview } from "./utils/truncateCharsOverview";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import MovieDetails from "./pages/MovieDetails";
import Explore from "./pages/Explore";
import { TruncateReview } from "./utils/truncateCharsReview";
// import { redirect } from "react-router-dom";

const App = () => {
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
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleSubmitQuery={handleSubmitQuery}
              query={query}
              setQuery={setQuery}
              movies={movies}
              setMovies={setMovies}
              truncateOverview={truncateOverview}
            />
          }
        ></Route>
        <Route path="/About" element={<About />}></Route>
        <Route
          path="/movie/:movieDetailsURL"
          element={
            <MovieDetails
              handleSubmitQuery={handleSubmitQuery}
              query={query}
              setQuery={setQuery}
              movies={movies}
              setMovies={setMovies}
              truncateOverview={truncateOverview}
              truncateReview={TruncateReview}
            />
          }
        ></Route>
        <Route path="/movie/explore" element={<Explore movies={movies} truncateOverview={truncateOverview} />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
