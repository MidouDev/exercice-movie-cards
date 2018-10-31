import React from "react";
import "../styles/RatingStars.css";

const RatingStars = props => (
  <div className="r-stars">
    <div className="container">
      <div className="stars">
        <i
          className={
            props.rating < 0.5
              ? "far fa-star fa-lg"
              : props.rating === 0.5
                ? "fas fa-star-half-alt fa-lg"
                : "fas fa-star fa-lg"
          }
        />
        <i
          className={
            props.rating < 1.5
              ? "far fa-star fa-lg"
              : props.rating === 1.5
                ? "fas fa-star-half-alt fa-lg"
                : "fas fa-star fa-lg"
          }
        />
        <i
          className={
            props.rating < 2.5
              ? "far fa-star fa-lg"
              : props.rating === 2.5
                ? "fas fa-star-half-alt fa-lg"
                : "fas fa-star fa-lg"
          }
        />
        <i
          className={
            props.rating < 3.5
              ? "far fa-star fa-lg"
              : props.rating === 3.5
                ? "fas fa-star-half-alt fa-lg"
                : "fas fa-star fa-lg"
          }
        />
        <i
          className={
            props.rating < 4.5
              ? "far fa-star fa-lg"
              : props.rating === 4.5
                ? "fas fa-star-half-alt fa-lg"
                : "fas fa-star fa-lg"
          }
        />
      </div>
      <div className="rating">{props.rating}</div>
    </div>
  </div>
);

export default RatingStars;
