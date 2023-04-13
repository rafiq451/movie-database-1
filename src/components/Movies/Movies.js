import style from './Movies.module.css';
import Movie from '../Movie/Movie';

import { nanoid } from 'nanoid';
const Movies = (props) => {
  // destructing props
  const { movies, setMovies } = props;
  function tabahFilm() {
    const movie = {
      id: nanoid(4),
      title: 'Spiral Jigsaw',
      year: 2021,
      type: 'Movie',
      poster: 'https://picsum.photos/300/400',
    };
    setMovies([...movies, movie]);
  }
  return (
    <div className={style.container}>
      <h2 className={style.movies__title}>Letest Movie</h2>
      <section className={style.movies}>
        <div className={style.movies__container}>
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
        <button onClick={tabahFilm}>Add Movie</button>
      </section>
    </div>
  );
};
export default Movies;
