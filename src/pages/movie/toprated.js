import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Hero from '../../components/Hero/Hero';
import Movies from '../../components/Movies/Movies';
import ENDPOINTS from '../../components/utils/constants/endpoints';

const TopRatedMovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  async function getTopRatedMovies() {
    const response = await axios(ENDPOINTS.TOPRATED);

    // simpan data ke setMovies
    setMovies(response.data.results);
  }
  return (
    <div>
      <Hero />
      <Movies movies={movies} title="Top Rated Movies" />
    </div>
  );
};

export default TopRatedMovie;
