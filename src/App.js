import React from "react";
import Background from "./components/Background/Background.js";
import MovieInfo from "./components/MovieInfo/MovieInfo.js";
import MovieSlider from "./components/MovieSlider/MovieSlider.js";
import { api } from "./api/api.js";
import "./styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  state = {
    loading: true,
    movies: [],
    genres: {},
  };

  getMoiveData = async () => {
    const data = await api.getMovieData();
    return data;
  };

  getGenreData = async () => {
    const data = await api.getAllGenres();
    return data;
  };

  setFetchDatas = async () => {
    const movies = await this.getMoiveData();
    const genres = await this.getGenreData();

    this.setState({
      loading: false,
      movies,
      genres,
    });
  };

  componentDidMount() {
    this.setFetchDatas();

    // console.log(document.querySelector(".movie__poster-item"));

    // const item = ReactDOM.findDOMNode(
    //   document.querySelector(".movie__poster-item")
    // );
    // item.classList.add("active");
  }

  renderInfo = (data) => {
    this.ref.current.renderInfo(data);
  };

  render() {
    const { loading } = this.state;

    return (
      <div className="App">
        {loading
          ? "Loading..."
          : [
              <Background key="background" movies={this.state.movies} />,
              <MovieInfo
                key="movie-info"
                movies={this.state.movies}
                ref={this.ref}
                genres={this.state.genres}
              />,
              <MovieSlider
                key="movie-slider"
                movies={this.state.movies}
                renderInfo={this.renderInfo}
              />,
            ]}
      </div>
    );
  }
}

export default App;
