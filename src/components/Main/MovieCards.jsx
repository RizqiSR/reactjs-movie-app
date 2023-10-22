import { MovieCard } from "./MovieCard";
import "react-loading-skeleton/dist/skeleton.css";

// const MovieCard = React.lazy(() => import("./MovieCard"))

export const MovieCards = ({ movies, truncateOverview }) => {
  return (
    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} truncateOverview={truncateOverview} />
      ))}
    </div>
  );
};