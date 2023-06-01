import { useState } from 'react';
import style from './From.module.css';
import { nanoid } from 'nanoid';
import Alert from '../Alert/Alert';
import Button from '../ui/Button';
import Input from '../ui/Form/input';
import From from '../ui/Form/form';
import Image from '../ui/Media/image';
import Label from '../ui/Form/label';
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
          <Image src="https://source.unsplash.com/600x400?spiderman" alt="" />
        </div>
        <div className={style.from__right}>
          <h2 className={style.right__title}>Add Movie</h2>
          <From onSubmit={handleSubmit}>
            <div className="form_group">
              <Label htmlFor="title">Title</Label>
              <br />
              <Input sm type="text" placeholder="Masukan Title" name="title" id="title" value={title} onChange={handleChange} />
              {isTitleError && (
                <Alert>
                  <p className={style.error}>Masukan title</p>
                </Alert>
              )}
            </div>
            <div className="form_group">
              <Label htmlFor="date">Tahun</Label>
              <br />
              <Input sm type="number" placeholder="Masukan Tahun" name="date" id="date" value={date} onChange={handleChange} />
              {isDateError && (
                <Alert>
                  <p className={style.error}>Masukan Tahun</p>
                </Alert>
              )}
            </div>
            <div className="form_group">
              <Label htmlFor="type">--Pilih--</Label>
              <br />
              <select className={style.select__form} name="type" id="type" value={type} onChange={handleChange}>
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
              <Label htmlFor="poster">Link Foto</Label>
              <br />
              <Input sm type="url" name="poster" id="poster" value={poster} onChange={handleChange} placeholder="Masukan Link Foto" />
              {isPosterError && (
                <Alert>
                  <p className={style.error}>Masukan Link Foto</p>
                </Alert>
              )}
            </div>
            {/* component Button  */}
            <Button color="secondary" full md type="submit">
              Submit
            </Button>
          </From>
        </div>
      </section>
    </div>
  );
};

export default Form;
