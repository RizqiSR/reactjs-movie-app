import { imageURL } from "../../utils/fetchDataAPI";

const MovieDetailsHeader = ({ movieDetails }) => {
  // Memeriksa apakakah movieDetails ada & memiliki atribut 'genres'
  const genres = movieDetails?.genres || [];
  const productionCompanies = movieDetails?.production_companies || [];

  const headerMovieDetailsStyle = {
    height: "100%",
    position: "relative",
    padding: "50px",
  };

  const movieDetailsPoster = {
    height: "100%",
    boxShadow: "1px 1px 20px #000",
  };

  const hour = Math.floor(movieDetails.runtime / 60);
  const minutes = movieDetails.runtime % 60;

  return (
    <div
      className="header-movie-poster d-flex"
      style={headerMovieDetailsStyle}
    >
      <img
        src={`${imageURL}${movieDetails.poster_path}`}
        className="movie-details-poster rounded me-5 mt-2"
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
        <p className="fw-light">{`${genres.map(
          (genre) => ` ${genre.name}`
        )} • ${hour} hour ${minutes} minutes • ${
          movieDetails.original_language
        }`}</p>
        <p className="fst-italic fw-light">{movieDetails.tagline}</p>
        <h5>Overview :</h5>
        <p className="fw-light">{movieDetails.overview}</p>
        <h5>Production Companies</h5>
        <div className="crew-container fw-light">
          {productionCompanies.map((company) => (
            <span key={company.id} className="production-companies rounded">
              {company.name},&nbsp;
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsHeader;
