import { MovieCardOverlay } from "./MovieCardOverlay";

export const MovieCard = ({ movie, truncateOverview }) => {
  const imageURL = import.meta.env.VITE_APP_BASEIMGURL;

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
