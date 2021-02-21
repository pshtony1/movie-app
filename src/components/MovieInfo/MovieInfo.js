import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { parseRate } from "../../utils/parseRate.js";
import "./MovieInfo.css";

class MovieInfo extends React.Component {
  state = {
    id: this.props.movies[0].id,
    title: this.props.movies[0].title,
    overview: this.props.movies[0].overview,
    year: this.props.movies[0].release_date.slice(0, 4),
    genres: this.props.movies[0].genre_ids,
    rating: this.props.movies[0].vote_average,
  };

  renderInfo = (data) => {
    this.setState(data);
  };

  render() {
    function createRate(rating) {
      const { fill, half, empty } = parseRate(rating);
      let component = [];
      let key = 0;

      for (let i = 0; i < fill; i++)
        component.push(<AiFillStar key={"star-info__" + ++key} />);
      for (let i = 0; i < half; i++)
        component.push(<BsStarHalf key={"star-info__" + ++key} />);
      for (let i = 0; i < empty; i++)
        component.push(<AiOutlineStar key={"star-info__" + ++key} />);

      return component;
    }

    function createGenres(genres) {
      let genreComponents = [];

      genres.forEach((genre) => {
        const genreName = this.props.genres[genre];
        const genreComponent = (
          <span key={"info-genre__" + genreName} className="genre">
            {genreName}
          </span>
        );

        genreComponents.push(genreComponent);
      });

      return genreComponents;
    }

    const { title, overview, year, genres, rating } = this.state;

    return (
      <div className="movie-info">
        <span className="movie-info__title">{title}</span>
        <div className="movie-info__info">
          <div className="movie-info__rate">{createRate(rating)}</div>
          <span className="movie-info__year">{year}</span>
        </div>
        <div className="movie-info__genres">
          {createGenres.bind(this)(genres)}
        </div>
        <span className="movie-info__overview">{overview}</span>
      </div>
    );
  }
}

export default MovieInfo;

// const {
//     id,
//     title,
//     overview,
//     release_date,
//     backdrop_path: bgImage,
//     poster_path: poster,
//     genre_ids: genres,
//     vote_average: rating,
//   } = movie;
