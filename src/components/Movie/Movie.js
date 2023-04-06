import style from '../Movies/Movies.module.css';

// tangkap props
const Movie = (props) => {
  // destructing object props
  const { movie } = props;
  return (
    <div className={style.movie}>
      <img className={style.movie__image} src={movie.poster} alt="" />
      <h3 className={style.movie__title}>{movie.title}</h3>
      <p className={style.movie__date}>{movie.year}</p>
    </div>
  );
};

export default Movie;
