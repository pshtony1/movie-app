import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const MOVIE_URL = `${process.env.REACT_APP_API_URL}?api_key=${process.env.REACT_APP_API_KEY}`;
const GENRE_URL = `${process.env.REACT_APP_GENRE_URL}?api_key=${process.env.REACT_APP_API_KEY}`;

const api = {
  getMovieData: async () => {
    const {
      data: { results },
    } = await axios.get(MOVIE_URL);

    return results;
  },
  getAllGenres: async () => {
    const {
      data: { genres },
    } = await axios.get(GENRE_URL);

    let parseGenres = {};

    genres.forEach((genre) => {
      parseGenres[genre.id] = genre.name;
    });

    return parseGenres;
  },
  getImgURL: (url) => {
    return process.env.REACT_APP_IMG_URL + url;
  },
};

export { api };
