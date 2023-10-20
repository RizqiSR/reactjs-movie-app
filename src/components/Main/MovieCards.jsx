import { MovieCard } from "./MovieCard";

export const MovieCards = ({ movies, truncateOverview }) => {
  return (
    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6">
      {movies.map((movie) => (
        <MovieCard
          movie={movie}
          truncateOverview={truncateOverview}
          key={movie.id}
        />
      ))}
    </div>
  );
}