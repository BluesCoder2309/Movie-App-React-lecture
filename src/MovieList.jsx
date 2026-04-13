import MovieCard from "./MovieCard.jsx";

function MovieList(props) {
  const { movies, addStars, removeStars, toggleFav, toggleCart } = props;
  return (
    <>
      {movies.map((movie, i) => (
        <MovieCard
          movies={movie}
          key={i}
          addStars={addStars}
          removeStars={removeStars}
          toggleFav={toggleFav}
          toggleCart={toggleCart}
        />
      ))}
    </>
  );
}

export default MovieList;
