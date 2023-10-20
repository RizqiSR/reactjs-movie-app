import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = import.meta.env.VITE_APP_BASEURL;
const apiKey = import.meta.env.VITE_APP_APIKEY;
const imageURL = import.meta.env.VITE_APP_BASEIMGURL;

function App() {
  const navContents = ["Home", "Movies", "TV Shows", "More"];
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  function handleSubmitQuery(e) {
    e.preventDefault(); // ini digunakan apabila hasil query tidak mau ditampilkan di URL

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
  }

  async function getMovieList() {
    const movieListResult = await axios.get(
      `${baseURL}/movie/top_rated?api_key=${apiKey}`
    );
    return movieListResult.data.results;
  }

  async function searchMovies(query) {
    const searchedMovieResult = await axios.get(
      `${baseURL}/search/movie?query=${query}&api_key=${apiKey}`
    );
    return searchedMovieResult.data.results;
  }

  useEffect(() => {
    getMovieList().then((res) => {
      setMovies(res);
    });
  }, []);

  function truncateOverview(text, maxChars) {
    if (text.length <= maxChars) {
      return text;
    } else {
      return `${text.slice(0, maxChars)}...`;
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark shadow-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand text-info" href="#">
            Movie App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navContents.map((navContent) => (
                <li key={navContent} className="nav-item">
                  <a
                    className={
                      navContent === "Home" ? "nav-link active" : "nav-link"
                    }
                    aria-current="page"
                    href="#"
                  >
                    {navContent}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div className="header-wrapper mt-5">
        <div className="header-text text-white row align-content-center bg-body bg-opacity-75 ">
          <h1>
            WELCOME<span className="text-info">.</span>
          </h1>
          <h3>
            Millions of movies, TV shows and people discover. Explore now.
          </h3>
          <form className="d-flex mt-5 border-secondary" role="search">
            <input
              className="movie-search form-control me-2 bg-info bg-opacity-10 border border-info"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={query}
              onChange={({ target }) => setQuery(target.value)}
            />
            <button
              className="btn btn-info"
              type="submit"
              onClick={handleSubmitQuery}
            >
              <i className="bi bi-search text-white"></i>
            </button>
          </form>
        </div>
      </div>
      <div className="card-wrapper text-start">
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6">
          {movies.map((movie) => (
            <div className="col" key={movie.id}>
              <div className="card">
                <img
                  src={`${imageURL}/${movie.poster_path}`}
                  className="card-img-top rounded"
                />

                <div className="overlay-content bg-opacity-75 rounded">
                  <div className="overlay-text">
                    <h5 className="card-title text-info">
                      {movie.title}
                      <span className="">
                        {" "}
                        ({new Date(movie.release_date).getFullYear()})
                      </span>
                    </h5>
                    <p className="card-text text-secondary-subtle">
                      {truncateOverview(movie.overview, 80)}
                    </p>
                  </div>

                  <div className="overlay-rating">
                    <div className="rating">
                      <p className="rating-point text-warning me-1">
                        {movie.vote_average.toFixed(1)}
                      </p>
                      <img
                        className="rating-star"
                        src={`./img/ratings/rating-${Math.floor(
                          movie.vote_average
                        )}.png`}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer text-white bg-dark pt-3">
        <a href="https://www.themoviedb.org/">
          <img
            className="tmdb-logo"
            src="\TMDb_logo.svg"
            alt="The Movie Database Logo"
          />
        </a>
        <p>
          This product uses the TMDb API but is not endorsed or certified by
          TMDb.
        </p>
      </div>
    </>
  );
}

export default App;
