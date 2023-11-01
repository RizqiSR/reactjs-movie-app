import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import MovieDetailsHeader from "../components/Header/MovieDetailsHeader";
import Main from "../components/Main/Main";
import {
  getMovieDetails,
  getCredits,
  getKeywords,
  getReviews,
} from "../utils/fetchDataAPI";
import { useState, useEffect } from "react";
import Details from "../components/Details/Details";

const MovieDetails = ({ TruncateReview }) => {
  const { movieDetailsURL } = useParams();
  const [movieDetails, setMovieDetails] = useState(0);
  const [credits, setCredits] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [reviews, setReviews] = useState([]);

  const movieID = movieDetailsURL.toString().split("-")[0];

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
      <Header movieDetails={movieDetails} credits={credits}>
        <MovieDetailsHeader movieDetails={movieDetails} />
      </Header>
      <Main>
        <Details
          credits={credits}
          movieDetails={movieDetails}
          keywords={keywords}
          reviews={reviews}
          TruncateReview={TruncateReview}
        />
      </Main>
    </>
  );
};

export default MovieDetails;
