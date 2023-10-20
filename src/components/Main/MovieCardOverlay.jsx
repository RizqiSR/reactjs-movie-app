export const MovieCardOverlay = ({ movie, truncateOverview }) => {
  return (
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
            src={`./img/ratings/rating-${Math.floor(movie.vote_average)}.png`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}