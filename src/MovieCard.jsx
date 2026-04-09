import React from "react";

class MovieCard extends React.Component {
  render() {
    // access the object properties by destructuring
    const { title, plot, price, poster, rating, stars, fav, cart } = this.props.movies;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              alt="Poster"
              src={poster}
            />
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
                    this.props.removeStars(this.props.movies);
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
                    this.props.addStars(this.props.movies);
                  }}
                />
                <span>{stars}</span>
              </div>

              <button
                className={fav ? "unfavourite-btn" : "favourite-btn"}
                onClick={() => {
                  this.props.toggleFav(this.props.movies);
                }}
              >
                {fav ? "Unfavourite" : "Favourite"}
              </button>

              <button
                className={cart ? "cart-btn" : "removeCart-btn"}
                onClick={() => {
                  this.props.toggleCart(this.props.movies);
                }}
              >
                {cart ? "Add to Cart" : "Remove from Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
