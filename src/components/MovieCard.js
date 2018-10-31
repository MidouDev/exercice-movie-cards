import React from "react";
import RatingStars from "./RatingStars";
import "../styles/MovieCard.css";
import MovieService from "../services/MovieService";

const MovieCard = props => {
  console.log(MovieService.getMovies()[0].imageUrl);
  return (
    <div className="movieCard card">
      <img
        className="card-img-top"
        src={MovieService.getMovies()[0].imageUrl}
        alt=""
      />
      <div className="card-body">
        <h4 className="card-title">{MovieService.getMovies()[0].title}</h4>
        <h6 className="card-subtitle text-muted mb-2">
          {MovieService.getMovies()[0].subtitle}
        </h6>
        <p className="text-justify">
          {MovieService.getMovies()[0].description}
        </p>
      </div>
      <RatingStars rating={props.rating} />
    </div>
  );
};

export default MovieCard;
