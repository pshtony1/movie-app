import React from "react";
import Background from "./components/Background.js";
import MovieInfo from "./components/MovieInfo.js";
import MovieSlider from "./components/MovieSlider.js";
import { api } from "./api/api.js";
import "./css/App.css";

class App extends React.Component {
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
  }

  render() {
    const { loading } = this.state;

    return (
      <div className="App">
        {loading
          ? "Loading..."
          : [
              <Background key="background" />,
              <MovieInfo key="movie-info" />,
              <MovieSlider key="movie-slider" />,
            ]}
      </div>
    );
  }
}

export default App;
