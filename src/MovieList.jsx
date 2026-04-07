import React from "react";
import MovieCard from "./MovieCard.jsx";

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers!",
      plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      price: 199,
      rating: 8.9,
      stars: 0,
      fav: false,
      cart: false,
    };
  }
  render() {
    const { title, plot, price, rating, stars, fav, cart } = this.state;
    return (
      <>
        <MovieCard movies = {this.state} />
      </>
    );
  }
}

export default MovieList;
