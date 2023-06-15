const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const ENDPOINTS = {
  // endpoints popular
  POPULAR: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,

  // topRated
  TOPRATED: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,

  // nowplaying
  NOPLAYING: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,

  // detail Movie
  getDetailMovie: (id) => `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`,

  // recommendations
  getRecommendations: (id) => `${BASE_URL}/movie/${id}/recommendations?api_key=${API_KEY}`,

  // getTrendingMovies
  TRANDINGMOVIES: `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,

  //   getdetailMovie
  getTrendingMovies: (id) => `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`,
};

export default ENDPOINTS;
