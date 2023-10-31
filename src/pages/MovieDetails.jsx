import { useParams, useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MovieDetailsHeader from "../components/Header/MovieDetailsHeader";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";
import {
  getMovieDetails,
  getCredits,
  getKeywords,
  getReviews,
} from "../utils/fetchDataAPI";
import { useState, useEffect } from "react";
import Details from "../components/Details/Details";

const MovieDetails = ({
  handleSubmitQuery,
  query,
  setQuery,
  movies,
  setMovies,
  truncateReview
}) => {
  const { movieDetailsURL } = useParams();
  const [movieDetails, setMovieDetails] = useState(0);
  const [credits, setCredits] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  const movieID = movieDetailsURL.toString().split("-")[0];

  const handleSearchSubmit = (e) => {
    handleSubmitQuery(e);
    navigate(`/movie/explore?search_query=${query}`);
  };

  useEffect(() => {
    getMovieDetails(movieID).then((res) => {
      setMovieDetails(res);
    });

    getCredits(movieID).then((res) => {
      setCredits(res);
    });

    getKeywords(movieID).then((res) => {
      setKeywords(res);
    });

    getReviews(movieID).then((res) => {
      setReviews(res);
    });
  }, [movieID]);

  return (
    <>
      <Navbar
        handleSubmitQuery={handleSearchSubmit}
        query={query}
        setQuery={setQuery}
        movies={movies}
        setMovies={setMovies}
      />
      <Header movieDetails={movieDetails} credits={credits}>
        <MovieDetailsHeader movieDetails={movieDetails} />
      </Header>
      <Main>
        <Details
          credits={credits}
          movieDetails={movieDetails}
          keywords={keywords}
          reviews={reviews}
          truncateReview={truncateReview}
        />
      </Main>
      <Footer />
    </>
  );
};

export default MovieDetails;
