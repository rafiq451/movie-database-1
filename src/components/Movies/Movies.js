import style from './Movies.module.css';
const Movies = () => {
  return (
    <div className={style.container}>
      <h2 className={style.movies__title}>Letest Movie</h2>
      <section className={style.movies}>
        <div className={style.movies__container}>
          <div className={style.movie}>
            <img className={style.movie__image} src="https://source.unsplash.com/300x400?got" alt="" />
            <h3 className={style.movie__title}>Movie Title</h3>
            <p className={style.movie__date}>Date Title</p>
          </div>
          <div className={style.movie}>
            <img className={style.movie__image} src="https://source.unsplash.com/300x400?marvel" alt="" />
            <h3 className={style.movie__title}>Movie Title</h3>
            <p className={style.movie__date}>Date Title</p>
          </div>
          <div className={style.movie}>
            <img className={style.movie__image} src="https://source.unsplash.com/300x400?superman" alt="" />
            <h3 className={style.movie__title}>Movie Title</h3>
            <p className={style.movie__date}>Date Title</p>
          </div>
          <div className={style.movie}>
            <img className={style.movie__image} src="https://source.unsplash.com/300x400?squidgame" alt="" />
            <h3 className={style.movie__title}>Movie Title</h3>
            <p className={style.movie__date}>Date Title</p>
          </div>
          <div className={style.movie}>
            <img className={style.movie__image} src="https://source.unsplash.com/300x400?kingsman" alt="" />
            <h3 className={style.movie__title}>Movie Title</h3>
            <p className={style.movie__date}>Date Title</p>
          </div>
          <div className={style.movie}>
            <img className={style.movie__image} src="https://source.unsplash.com/300x400?got" alt="" />
            <h3 className={style.movie__title}>Movie Title</h3>
            <p className={style.movie__date}>Date Title</p>
          </div>
          <div className={style.movie}>
            <img className={style.movie__image} src="https://source.unsplash.com/300x400?superman" alt="" />
            <h3 className={style.movie__title}>Movie Title</h3>
            <p className={style.movie__date}>Date Title</p>
          </div>
          <div className={style.movie}>
            <img className={style.movie__image} src="https://source.unsplash.com/300x400?ironman" alt="" />
            <h3 className={style.movie__title}>Movie Title</h3>
            <p className={style.movie__date}>Date Title</p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Movies;
