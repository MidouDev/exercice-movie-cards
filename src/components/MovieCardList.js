import React from "react";
import MovieCard from "./MovieCard";

const MovieCardList = props => (
  <div className="">
    <div className="d-flex flex-row flex-wrap m-2">
      {props.movies.map(movie => (
        <div className="m-2" key={movie.id}>
          <MovieCard key={movie.id} movie={movie} />
        </div>
      ))}
    </div>
  </div>
);

export default MovieCardList;
