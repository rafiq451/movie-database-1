import axios from 'axios';
// import { useState } from 'react';
import { useEffect } from 'react';
import Movies from '../../components/Movies/Movies';
import Hero from '../../components/Hero/Hero';
import ENPOINTS from '../../components/utils/constants/endpoints';
import { useDispatch } from 'react-redux';
import { updateMovie } from '../../features/movieSlice';

const Popular = () => {
  // simpan API KEY dan URL kedalam variable

  // membuat state movies
  // const [movies, setMovies] = useState([]);

  // buat dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    const response = await axios(ENPOINTS.POPULAR);

    // simpan data ke setMovies
    // setMovies(response.data.results);
    dispatch(updateMovie(response.data.results));
  }

  // console.log(movies);
  return (
    <div>
      <Hero />
      <Movies title="Popular Movies" />
    </div>
  );
};

export default Popular;
