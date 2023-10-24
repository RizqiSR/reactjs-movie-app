import MovieCardOverlay from "./MovieCardOverlay";
import { imageURL } from "../../utils/fetchDataAPI";
// import { useState, useEffect } from "react";
// import { Loading } from "../../utils/Loading";

const MovieCard = ({ movie, truncateOverview }) => {
  return (
    <div className="col">
      <div className="card">
        <img
          src={`${imageURL}/${movie.poster_path}`}
          className="card-img-top rounded"
        />
        <MovieCardOverlay movie={movie} truncateOverview={truncateOverview} />
      </div>
    </div>
  );
};

export default MovieCard;