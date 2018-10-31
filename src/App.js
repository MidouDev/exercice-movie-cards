import React, { Component } from "react";
import "./styles/bootstrap.min.css";
import "./components/RatingStars.js";
import MovieCard from "./components/MovieCard";

class App extends Component {
  state = {
    rating: 4.5
  };

  render() {
    return (
      <div className="App">
        <MovieCard rating={this.state.rating} />
      </div>
    );
  }
}

export default App;
