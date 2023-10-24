import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MovieDetailsHeader from "../components/Header/MovieDetailsHeader";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";
import { getMovieDetails } from "../utils/fetchDataAPI";
import { useState, useEffect } from "react";
import Details from "../components/Details/Details";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(0);
  // const [movieBackdrops, setMovieBackdrops] = useState(0)
  const { movieDetailsURL } = useParams();
  const movieID = movieDetailsURL.toString().split("-")[0];

  useEffect(() => {
    getMovieDetails(movieID).then((res) => {
      setMovieDetails(res);
    });
  }, [movieID]);

  return (
    <>
      <Navbar />
      <Header movieDetails={movieDetails}>
        <MovieDetailsHeader movieDetails={movieDetails} />
      </Header>
      <Main>
        <Details />
      </Main>
      <Footer />
    </>
  );
};

export default MovieDetails;
