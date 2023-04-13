import data from '../components/utils/constants/data.js';
import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import Hero from '../components/Hero/Hero.js';
import Movies from '../components/Movies/Movies.js';
import Footer from '../components/Footer/Footer.js';
import From from '../components/From/From.js';

const Main = () => {
  // state
  const [movies, setMovies] = useState(data);
  return (
    <main>
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
      <From movies={movies} setMovies={setMovies} />
    </main>
  );
};
const Home = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
