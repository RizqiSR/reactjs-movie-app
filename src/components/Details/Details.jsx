import { imageURL } from "../../utils/fetchDataAPI";
import { dateFormatter } from "../../utils/dateFormatter";
import MovieReviews from "./MovieReviews";

const Details = ({ credits, movieDetails, keywords, reviews, TruncateReview }) => {
  const cast = credits?.cast || [];
  const topBilledCast = cast.slice(0, 15);

  const movieStats = [
    {
      name: "Status",
      data: movieDetails.status ? movieDetails.status : "-",
    },
    {
      name: "Release Date",
      data: movieDetails.release_date
        ? dateFormatter(movieDetails.release_date)
        : "-",
    },
    {
      name: "Homepage",
      data: movieDetails.homepage ? (
        <a href={movieDetails.homepage}>{movieDetails.homepage}</a>
      ) : (
        "-"
      ),
    },
    {
      name: "Budget",
      data: `$ ${Number(movieDetails.budget).toLocaleString()}`,
    },
    {
      name: "Revenue",
      data: `$ ${Number(movieDetails.revenue).toLocaleString()}`,
    },
  ];

  return (
    <div className="movie-details text-white d-flex justify-content-between">
      <div className="cast-container">
        <h2 className="text-info">Top Billed Cast</h2>
        <div className="cast-cards py-3 d-flex mb-3">
          {topBilledCast.map((topCast) => (
            <div
              key={topCast.cast_id}
              className="cast-card me-3 border-dark rounded bg-dark"
            >
              <img
                src={ topCast.profile_path ? `${imageURL}${topCast.profile_path}` : "../src/assets/default-pic.png"}
                alt={topCast.name}
                className="rounded"
              />
              <div className="cast-card-body">
                <p className="cast-name">{topCast.name}</p>
                <p className="cast-character">{topCast.character}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="full-cast-link">
          <h5 className="fw-normal">Full Cast and Crew</h5>
        </div>
        <div className="socials-container">
          <div className="socials-title-container d-flex align-items-center">
            <h2 className="me-5 mt-3 text-info">Socials</h2>
            <h5 className="me-3 border-bottom border-info py-2 fw-normal">Reviews</h5>
            <h5 className="py-2 fw-normal">Discussions</h5>
          </div>
          <MovieReviews reviews={reviews} TruncateReview={TruncateReview} />
        </div>
      </div>

      <div className="side-details-container">
        <h2 className="text-info mb-3">Movie Stats</h2>
        {movieStats.map((stat) => (
          <div key={stat.name} className="details-stats">
            <h5 className="details-stats-title m-0 fs-5 fw-normal">{stat.name}</h5>
            <p className="details-stats-data fw-lighter text-break">{stat.data}</p>
          </div>
        ))}
        <div className="keywords-container">
          <h5 className="fw-normal">Keywords</h5>
            <div className="keywords">
              {keywords.map(keyword => (
                <span key={keyword.id} className="keyword-badge badge bg-dark me-2 mb-2 p-2 fs-6">{keyword.name}</span>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};
export default Details;
