import axios from "axios";

const baseURL = import.meta.env.VITE_APP_BASEURL;
const apiKey = import.meta.env.VITE_APP_APIKEY;

export const getMovieList = async () => {
  const movieListResult = await axios.get(
    `${baseURL}/movie/top_rated?api_key=${apiKey}`
  );
  return movieListResult.data.results;
}

export const searchMovies = async (query) => {
  const searchedMovieResult = await axios.get(
    `${baseURL}/search/movie?query=${query}&api_key=${apiKey}`
  );
  return searchedMovieResult.data.results;
}