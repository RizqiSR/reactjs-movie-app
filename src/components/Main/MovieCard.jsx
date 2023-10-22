import { MovieCardOverlay } from "./MovieCardOverlay";
import { useState, useEffect } from "react";
import {Loading} from "../../utils/Loading";


export const MovieCard = ({ movie, truncateOverview }) => {
  const imageURL = import.meta.env.VITE_APP_BASEIMGURL;
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return isLoading ? (<Loading/>) : (
    <div className="col">
      <div className="card">
        <img
          src={`${imageURL}/${movie.poster_path}`}
          className="card-img-top rounded"
        />
        <MovieCardOverlay movie={movie} truncateOverview={truncateOverview} />
      </div>
    </div>
  )
};