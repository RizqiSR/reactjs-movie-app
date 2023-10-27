import { imageURL } from "../../utils/fetchDataAPI";

const MovieDetailsHeader = ({ movieDetails }) => {
  // Memeriksa apakakah movieDetails ada & memiliki atribut 'genres'
  const genres = movieDetails?.genres || [];

  const headerMovieDetailsStyle = {
    height: "100%",
    position: "relative",
    top: "28px",
  };

  const movieDetailsPoster = {
    height: "100%",
    boxShadow: "1px 1px 20px #000",
  };

  const hour = Math.floor(movieDetails.runtime / 60);
  const minutes = movieDetails.runtime % 60;
  // genres.map((element) => {
  //   console.log(element);
  // });

  return (
    <div
      className="header-movie-poster d-flex p-5"
      style={headerMovieDetailsStyle}
    >
      <img
        src={`${imageURL}${movieDetails.poster_path}`}
        className="movie-details-poster rounded me-5 "
        alt={`${movieDetails.title} poster`}
        style={movieDetailsPoster}
      />
      <div>
        <h1 className="fw-bolder">
          {movieDetails.title}{" "}
          <span className="fw-light">
            ({new Date(movieDetails.release_date).getFullYear()})
          </span>
        </h1>
        <p className="fw-light">{`${genres.map(genre => genre.name)} • ${hour} hour ${minutes} minutes • ${movieDetails.original_language}`}</p>
        <p className="fst-italic">{movieDetails.tagline}</p>
        <h5>Overview :</h5>
        <p>{movieDetails.overview}</p>
        <div className="crew">
          <h6></h6>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsHeader;
