import styled from "styled-components";

const MovCard = styled.div`
  background: linear-gradient(170deg, #1bc059, #0d47a1);
  padding: 0;
  border: none;
  border-radius: 10px;
  box-shadow:
    0 1px 3px 0 #d4d4d5,
    0 0 0 1px #242222;
  display: flex;
  &:hover {
    background: linear-gradient(170deg, #0d47a1, #1bc059);
    cursor: pointer;
  }
`;

function MovieCard(props) {
  // access the object properties by destructuring
  const { title, plot, price, poster, rating, stars, fav, cart } = props.movies;
  return (
    <div className="main">
      <MovCard className="movie-card">
        <div className="left">
          <img alt="Poster" src={poster} />
        </div>
        <div className="right">
          <div className="title">{title}</div>
          <div className="plot">{plot}</div>
          <div className="price">{price}</div>
          <div className="footer">
            <div className="rating">{rating}</div>
            <div className="star-dis">
              <img
                src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                alt="minus-btn"
                className="str-btn"
                onClick={() => {
                  props.removeStars(props.movies);
                }}
              />
              <img
                className="stars"
                src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                alt="star"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/32/32563.png"
                alt="plus-btn"
                className="str-btn"
                onClick={() => {
                  props.addStars(props.movies);
                }}
              />
              <span>{stars}</span>
            </div>

            <button
              className={fav ? "unfavourite-btn" : "favourite-btn"}
              onClick={() => {
                props.toggleFav(props.movies);
              }}
            >
              {fav ? "Unfavourite" : "Favourite"}
            </button>

            <button
              className={cart ? "removeCart-btn" : "cart-btn"}
              onClick={() => {
                props.toggleCart(props.movies);
              }}
            >
              {cart ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </MovCard>
    </div>
  );
}

export default MovieCard;
