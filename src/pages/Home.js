import Navbar from '../components/Navbar/Navbar.js';
import Hero from '../components/Hero/Hero.js';
import Movies from '../components/Movies/Movies.js';
import Footer from '../components/Footer/Footer.js';
import From from '../components/From/From.js';
const Main = () => {
  return (
    <main>
      <Hero />
      <Movies />
      <From />
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
