import { useEffect, useState } from 'react';
import style from './Hero.module.css';

const Hero = () => {
  const [movie, SetMovie] = useState('');
  useEffect(function () {
    async function fectMovie() {
      const url = 'https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590';
      const response = await fetch(url);
      const data = await response.json();
      SetMovie(data);
    }

    fectMovie();
  }, []);
  return (
    <div className={style.container}>
      <section className={style.hero}>
        <div className={style.hero__left}>
          <h2 className={style.hero__title}>{movie.Title}</h2>
          <h3 className={style.hero__gendre}>Genre {movie.Genre}</h3>
          <p className={style.hero__deskription}>{movie.Plot}</p>
          <button className={style.hero__button}>Watch</button>
        </div>
        <div className={style.hero__right}>
          <img className={style.hero__img} src={movie.Poster} alt="" />
        </div>
      </section>
    </div>
  );
};
export default Hero;
