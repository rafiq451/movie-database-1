import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Movies from '../../components/Movies/Movies';
import Hero from '../../components/Hero/Hero';

const Popular = () => {
  // simpan API KEY dan URL kedalam variable
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  // membuat state movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    const response = await axios(URL);

    // simpan data ke setMovies
    setMovies(response.data.results);
  }

  // console.log(movies);
  return (
    <div>
      <Hero />
      <Movies movies={movies} title="Popular Movies" />
    </div>
  );
};

export default Popular;
