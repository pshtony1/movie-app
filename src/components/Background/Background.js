import React from "react";
import ReactDOM from "react-dom";
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
        <div className="background__filter"></div>
      </div>
    );
  }
}

export default BackGround;
