import React from "react";
import ReactDOM from "react-dom";
import { IoMdPlay } from "react-icons/io";
import { api } from "../../api/api.js";
import "./Background.css";

class BackGround extends React.Component {
  renderBgFilter = () => {
    const bgFilter = ReactDOM.findDOMNode(
      document.querySelector(".background__filter")
    );

    bgFilter.style.height = `${window.innerHeight * 0.2}px`;
  };

  componentDidMount() {
    window.addEventListener("resize", this.renderBgFilter);
    this.renderBgFilter();
  }

  render() {
    return (
      <div className="background">
        <img
          className="background__img"
          src={api.getImgURL(this.props.movies[0].backdrop_path)}
          alt=""
        />
        <div className="background__play">
          <span className="background__play-left-span">WATCH</span>
          <div className="background__play-icon">
            <IoMdPlay />
          </div>
          <span className="background__play-lerightft-span">NOW</span>
        </div>
        <div className="background__filter"></div>
      </div>
    );
  }
}

export default BackGround;
