import React from "react";
import RatingStars from "./RatingStars";
import "../styles/MovieCard.css";

const MovieCard = props => {
  //console.log(props.movie);
  return (
    <div className="movieCard card">
      <img className="card-img-top" src={props.movie.imageUrl} alt="" />
      <div className="card-body">
        <h4 className="card-title">{props.movie.title}</h4>
        <h6 className="card-subtitle text-muted mb-2">
          {props.movie.subtitle}
        </h6>
        <p className="text-justify">{props.movie.description}</p>
      </div>
      <RatingStars rating={props.movie.rating} />
    </div>
  );
};

export default MovieCard;
