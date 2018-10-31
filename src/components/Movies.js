import React, { Component } from "react";
import MovieService from "../services/MovieService";
import MovieCardList from "./MovieCardList";

class Movies extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    this.setState({ movies: MovieService.getMovies() });
  }

  render() {
    return (
      <div>
        <MovieCardList movies={this.state.movies} />
      </div>
    );
  }
}

export default Movies;
