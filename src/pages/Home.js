// import data from '../components/utils/constants/data.js';
// import { useState } from 'react';
import Hero from '../components/Hero/Hero.js';
import Movies from '../components/Movies/Movies.js';
// import From from '../components/From/From.js';

const Home = () => {
  // const [movies, setMovies] = useState(data);
  return (
    <>
      <Hero />
      <Movies title="Letest Movie" />
      {/* <From movies={movies} setMovies={setMovies} /> */}
    </>
  );
};

export default Home;
