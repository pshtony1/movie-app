import React from "react";
import { GiClick } from "react-icons/gi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { parseRate } from "../../../utils/parseRate.js";
import "./SliderItem.css";

class SliderItem extends React.Component {
  render() {
    const { title, poster, id, onClick, rating, year } = this.props;

    function createRate(rating) {
      const { fill, half, empty } = parseRate(rating);
      let component = [];
      let key = 0;

      for (let i = 0; i < fill; i++)
        component.push(<AiFillStar key={"star" + ++key} />);
      for (let i = 0; i < half; i++)
        component.push(<BsStarHalf key={"star" + ++key} />);
      for (let i = 0; i < empty; i++)
        component.push(<AiOutlineStar key={"star" + ++key} />);

      return component;
    }

    return (
      <div key={id} id={id} className="movie__poster-item" onClick={onClick}>
        <img className="movie__poster" src={poster} alt={title} />
        <div className="movie__poster-info">
          <span className="poster-info__title">{title}</span>
          <div className="poster-info__sub-info">
            <div className="poster-info__rate">{createRate(rating)}</div>
            <span className="poster-info__year">{year}</span>
          </div>
          <div className="poster-info__icon">
            <GiClick />
          </div>
        </div>
      </div>
    );
  }
}

export default SliderItem;
