import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
axios.defaults.params = {
  api_key: `a7e3db7f9dde18dfc4c8761e07ac5c29`,
};

export const getTrandingMovies = async (page = 1) => {
  try {
    const { data } = await axios.get('/trending/movie/day', {
      params: {
        page,
      },
    });
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movies');
  }
};

export const getMoviesDetails = async (id) => {
  try {
    const { data } = await axios.get(`movie/${id}`, {
      params: {
        id: id,
      },
    });
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movie with that name');
  }
};

export const getMoviesSearch = async (page = 1, query = '') => {
  try {
      const urlParam = `/search/movie?page=${page}&query=${query}`;
    const { data } = await axios.get(urlParam);
    return data;
  } catch (error) {
    throw new Error('Oops, there is no movie');
  }
};

export const getMoviesCast = async (id) => {
  try {
    const { data } = await axios.get(`movie/${id}/credits`, {
      params: {
        id: id,
      },
    });
    return data.cast;
  } catch (error) {
    throw new Error('Oops, there is no cast movie');
  }
};

export const getMoviesReviews = async (id) => {
  try {
    const { data } = await axios.get(`movie/${id}/reviews`, {
      params: {
        id: id,
      },
    });
    return data.results;
  } catch (error) {
    throw new Error('Oops, we don`t have any reviews');
  }
};
