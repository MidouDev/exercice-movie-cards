import React, { Component } from "react";
import "./styles/bootstrap.min.css";
import "./components/RatingStars.js";
import Movies from "./components/Movies";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="mb-4">
          <Header />
        </div>
        <Movies />
      </div>
    );
  }
}

export default App;
