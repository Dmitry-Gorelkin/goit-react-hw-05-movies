import axios from 'axios';

const API_KEY = 'a3bd63f16fb7aecb4bc4aafac25ce962';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fhechPopularMovies = async () => {
  const options = {
    url: '/trending/movie/day',
    params: {
      api_key: API_KEY,
    },
  };

  const response = await axios(options);
  return response.data;
};

export const fhechSearchMovies = async (query, page = 1) => {
  const options = {
    url: '/search/movie',
    params: {
      api_key: API_KEY,
      query,
      page,
    },
  };

  const response = await axios(options);
  return response.data;
};

export const fhechGetDetailshMovies = async idMovie => {
  const options = {
    url: `/movie/${idMovie}`,
    params: {
      api_key: API_KEY,
    },
  };

  const response = await axios(options);
  return response.data;
};

export const fhechGetCreditsMovies = async idMovie => {
  const options = {
    url: `/movie/${idMovie}/credits`,
    params: {
      api_key: API_KEY,
    },
  };

  const response = await axios(options);
  return response.data;
};

export const fhechGetReviewsMovies = async (idMovie, page = 1) => {
  const options = {
    url: `/movie/${idMovie}/reviews`,
    params: {
      api_key: API_KEY,
      page,
    },
  };

  const response = await axios(options);
  return response.data;
};
