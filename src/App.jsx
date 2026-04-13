import React from "react";
import { movies } from "./moviesData.js";
import MovieList from "./MovieList.jsx";
import Navbar from "./Navbar.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
    };
  }

  handleIncStar = (movie) => {
    const { movies } = this.state;
    // TO get the index of the movie first
    const mid = movies.indexOf(movie);

    if (movies[mid].stars >= 5) return;
    movies[mid].stars += 0.5;
    this.setState({
      movies: movies,
    });
  };

  handleDecStar = (movie) => {
    const { movies } = this.state;

    const mid = movies.indexOf(movie);

    if (movies[mid].stars <= 0) return;
    movies[mid].stars -= 0.5;
    this.setState({ movies: movies });
  };

  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;
    this.setState({ movies: movies });
  };

  handleToggleCart = (movie) => {
    let { movies, cartCount } = this.state;
    const mid = movies.indexOf(movie);
    // console.log(movies[mid].cart)
    movies[mid].cart = !movies[mid].cart;

    if (movies[mid].cart) {
      cartCount += 1;
    } else {
      cartCount -= 1;
    }

    this.setState({
      movies,
      cartCount,
    });
  };
  render() {
    const { movies, cartCount } = this.state;
    return (
      <>
        <Navbar cartCount = {cartCount}/>
        <MovieList
          movies={movies}
          addStars={this.handleIncStar}
          removeStars={this.handleDecStar}
          toggleFav={this.handleToggleFav}
          toggleCart={this.handleToggleCart}
        />
      </>
    );
  }
}

export default App;
