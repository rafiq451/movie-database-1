import { useState } from 'react';
import style from './From.module.css';
import { nanoid } from 'nanoid';
import Alert from '../Alert/Alert';
const Form = (props) => {
  const { movies, setMovies } = props;

  const [formdata, setFormData] = useState({
    title: '',
    date: '',
    type: '',
    poster: '',
  });

  const [error, setError] = useState({
    isTitleError: false,
    isDateError: false,
    isTypeError: false,
    isPosterError: false,
  });

  const { isTitleError, isDateError, isTypeError, isPosterError } = error;

  const { title, date, type, poster } = formdata;

  function handleError(key, value) {
    setError((prevError) => ({
      ...prevError,
      [key]: value,
    }));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function validate() {
    let isValid = true;

    if (title === '') {
      handleError('isTitleError', true);
      isValid = false;
    } else {
      handleError('isTitleError', false);
    }

    if (date === '') {
      handleError('isDateError', true);
      isValid = false;
    } else {
      handleError('isDateError', false);
    }

    if (type === '') {
      handleError('isTypeError', true);
      isValid = false;
    } else {
      handleError('isTypeError', false);
    }

    if (poster === '') {
      handleError('isPosterError', true);
      isValid = false;
    } else {
      handleError('isPosterError', false);
    }

    return isValid;
  }

  function addMovie() {
    const movie = {
      id: nanoid(),
      title: title,
      year: date,
      type: type,
      poster: poster,
    };

    setMovies([...movies, movie]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validate()) {
      addMovie();
      setFormData({
        title: '',
        date: '',
        type: '',
        poster: '',
      });
    }
  }

  return (
    <div className={style.container}>
      <section className={style.from}>
        <div className={style.from__left}>
          <img className={style.from__image} src="https://source.unsplash.com/600x400?spiderman" alt="" />
        </div>
        <div className={style.from__right}>
          <h2 className={style.right__title}>Add Movie</h2>
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <label className={style.from__label} htmlFor="title">
                Title
              </label>
              <br />
              <input className={style.from__input} type="text" name="title" id="title" value={title} onChange={handleChange} />
              {isTitleError && (
                <Alert>
                  <p className={style.error}>Masukan title</p>
                </Alert>
              )}
            </div>
            <div className="form_group">
              <label className={style.from__label} htmlFor="date">
                Tahun
              </label>
              <br />
              <input className={style.from__input} type="number" name="date" id="date" value={date} onChange={handleChange} />
              {isDateError && (
                <Alert>
                  <p className={style.error}>Masukan Tahun</p>
                </Alert>
              )}
            </div>
            <div className="form_group">
              <label className={style.from__label} htmlFor="type">
                --- Pilih ---
              </label>
              <br />
              <select name="type" id="type" value={type} onChange={handleChange}>
                <option value="">Select:</option>
                <option value="action">Action</option>
                <option value="drama">Drama</option>
                <option value="movie">Movie</option>
              </select>
              {isTypeError && (
                <Alert>
                  <p className={style.error}>Masukan Type</p>
                </Alert>
              )}
            </div>
            <div className="form_group">
              <br />
              <label className={style.from__label} htmlFor="poster">
                Link Foto
              </label>
              <br />
              <input className={style.from__input} type="url" name="poster" id="poster" value={poster} onChange={handleChange} />
              {isPosterError && (
                <Alert>
                  <p className={style.error}>Masukan Link Foto</p>
                </Alert>
              )}
            </div>
            <button className={style.from__button} type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Form;
