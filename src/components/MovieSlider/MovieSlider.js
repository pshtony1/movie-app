import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-multi-carousel";
import SliderItem from "./SliderItem/SliderItem.js";
import { api } from "../../api/api.js";
import BackGround from "../Background/Background.js";
import "./MovieSlider.css";
import "react-multi-carousel/lib/styles.css";

class MovieSlider extends React.Component {
  state = {
    slides: null,
  };

  setSlides = () => {
    const width = window.innerWidth;
    let slides;

    if (3000 <= width) slides = 2;
    else if (2200 <= width) slides = 2;
    else if (1600 <= width) slides = 2;
    else if (1024 <= width) slides = 2;
    else if (700 <= width) slides = 1;
    else slides = 1;

    this.setState({
      slides,
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.setSlides);
    this.setSlides();
  }

  renderItem = () => {
    return this.props.movies.map((movie) => {
      const {
        id,
        poster_path,
        title,
        vote_average,
        release_date,
        backdrop_path,
      } = movie;

      return (
        <SliderItem
          key={id}
          id={id}
          poster={api.getImgURL(poster_path)}
          title={title}
          rating={vote_average}
          year={release_date.slice(0, 4)}
          onClick={(e) => {
            let target = e.target;
            if (target.matches("img")) return;

            const items = document.querySelectorAll(".movie__poster-item");
            const targetItem = ReactDOM.findDOMNode(
              document.getElementById(`${id}`)
            );
            const bgImg = ReactDOM.findDOMNode(
              document.querySelector(".background__img")
            );
            bgImg.src = api.getImgURL(backdrop_path);

            items.forEach((item) => {
              ReactDOM.findDOMNode(item).classList.remove("active");
            });

            targetItem.classList.add("active");
          }}
        />
      );
    });
  };

  render() {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 8,
      },
      largeDesktop: {
        breakpoint: { max: 3000, min: 2200 },
        items: 5,
      },
      mediumDesktop: {
        breakpoint: { max: 2200, min: 1600 },
        items: 4,
      },
      smalDesktop: {
        breakpoint: { max: 1600, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 700 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 700, min: 0 },
        items: 1,
      },
    };

    return (
      <div className="movie-slider">
        <Carousel
          responsive={responsive}
          draggable={false}
          slidesToSlide={this.state.slides}
          centerMode
        >
          {this.renderItem()}
        </Carousel>
      </div>
    );
  }
}

export default MovieSlider;
