import Loading  from "../../utils/Loading";
import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";

const MovieCard = lazy(() => import("./MovieCard"))

const MovieCards = ({ movies, truncateOverview }) => {
  // console.log(movies);
  return (
    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6">
      {movies.map((movie) => {
        const splitedTitle = movie.title.toLowerCase().replace(/[:-?]|'/g, '').replace(/ {2,}/g, ' ').replaceAll(" ","-")
        return (
          <Suspense key={movie.id} fallback={<Loading/>}>
          <Link to={{ pathname: `/movie/${movie.id}-${splitedTitle}` }}>
            <MovieCard movie={movie} truncateOverview={truncateOverview} />
          </Link>
        </Suspense>
        )
      })}
    </div>
  );
};

export default MovieCards;