import Loading  from "../../utils/Loading";
import { Suspense, lazy } from "react";

const MovieCard = lazy(() => import("./MovieCard"))

const MovieCards = ({ movies, truncateOverview }) => {
  return (
    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6">
      {movies.map((movie) => (
        <Suspense key={movie.id} fallback={<Loading/>}>
          <MovieCard movie={movie} truncateOverview={truncateOverview} />
        </Suspense>
      ))}
    </div>
  );
};

export default MovieCards;