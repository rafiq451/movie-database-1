import style from './From.module.css';
const From = () => {
  return (
    <div className={style.container}>
      <section className={style.from}>
        <div className={style.from__left}>
          <img className={style.from__image} src="https://source.unsplash.com/600x400?spiderman" alt="" />
        </div>
        <div className={style.from__right}>
          <h2 className={style.right__title}>Add Movie</h2>
          <form action="">
            <label className={style.from__label} for="title">
              Title
            </label>
            <br />
            <input className={style.from__input} type="text" id="title" name="title" />
            <br />
            <label className={style.from__label} for="year">
              Year
            </label>
            <br />
            <input className={style.from__input} type="text" id="year" name="year" />
            <br />
            <button className={style.from__button} type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default From;
