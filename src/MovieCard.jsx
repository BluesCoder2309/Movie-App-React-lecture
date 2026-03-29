import React from "react";

class MovieCard extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers!",
      plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      price: 199,
      rating: 8.9,
      stars: 0,
    };
    // this.addStars = this.addStars.bind(this);
  }

  //   instead of binding using this.addStars = this.addStars.bind(this); we can also use an arrow function instead of a regular function, so that the value of this is not lost while passing its reference

//   using first form of setState
  addStars = () => {
    if(this.state.stars >= 5){
        return;
    }
    this.setState((prevState) => {
      return {
        stars: prevState.stars + 0.5,
      };
    });
  };
  
  // using second form of setState
  removeStars = () => {
    if(this.state.stars <= 0){
        return;
    }
    this.setState({ stars: this.state.stars - 0.5 });
  };
  render() {
    // access the object properties by structuring
    const { title, plot, price, rating, stars } = this.state;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              alt="Poster"
              src="https://www.photosmurales.fr/media/catalog/product/import/api-v1.1-file-public-files-pim-assets-97-ad-84-62-6284ad972eff292d45ce1a2e-images-29-44-f8-65-65f84429e95865a273d91870-4-4124-avengers-movie-poster-ecirgb-xl-web.jpg"
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
                  onClick={this.removeStars}
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
                  onClick={this.addStars}
                />
                <span>{stars}</span>
              </div>
              <button className="favourite-btn">Favourite</button>
              <button className="cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
