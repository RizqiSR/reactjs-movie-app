import { imageURL } from "../../utils/fetchDataAPI";

const Details = ({ credits, movieDetails, keywords }) => {
  const cast = credits?.cast || [];
  const topBilledCast = cast.slice(0, 15);
  // const keyword = keywords?.name || []
  // console.log(keywords);

  const movieStats = [
    {
      name: "Status",
      data: movieDetails.status ? movieDetails.status : "-",
    },
    {
      name: "Release Date",
      data: movieDetails.release_date
        ? new Date(movieDetails.release_date).toLocaleDateString()
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
      <div className="cast-container p-3">
        <h2>Top Billed Cast</h2>
        <div className="cast-cards d-flex">
          {topBilledCast.map((topCast) => (
            <div
              key={topCast.cast_id}
              className="cast-card me-3 border-dark rounded bg-dark"
            >
              <img
                src={`${imageURL}${topCast.profile_path}`}
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
      </div>

      <div className="side-details-container p-3">
        <h2>Movie Stats</h2>
        {movieStats.map((stat) => (
          <div key={stat.name} className="details-stats">
            <p className="details-stats-title">{stat.name}</p>
            <p className="details-stats-data">{stat.data}</p>
          </div>
        ))}
        <div className="keywords-container">
          <h2>Keywords</h2>
          {keywords.map((keyword) => {
            <div className="keywords">
              <span>{keyword.name}</span>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};
export default Details;
