import { useState } from 'react';
import style from './From.module.css';
import { nanoid } from 'nanoid';
import Alert from '../Alert/Alert';
const From = (props) => {
  const { movies, setMovies } = props;
  // membuat satate title
  const [title, setTitle] = useState('');
  // membuat state date
  const [date, setDate] = useState('');
  // membuat state type
  const [type, setType] = useState('');
  // membuat state type
  const [poster, setPoster] = useState('');
  // Membuat state title & date errors/empty

  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isTypeError, setIsTypeError] = useState(false);
  const [isPosterError, setIsPosterError] = useState(false);

  // fungsi hendle title
  function handleTitle(e) {
    setTitle(e.target.value);
  }
  // fungsi hendle date
  function handleDate(e) {
    setDate(e.target.value);
  }

  // fungsi hendle type
  function handleType(e) {
    setType(e.target.value);
  }
  // fungsi hendle type
  function handlePoster(e) {
    setPoster(e.target.value);
  }

  // hendle from ketika di submit
  function handleSubmit(e) {
    // mencegah prilaku default: refresh

    e.preventDefault();
    // jika di submit datanya tidak ada maka tampilkan pesan eroor nya
    if (title === '') {
      setIsTitleError(true);
    } else if (date === '') {
      setIsDateError(true);
      setIsTitleError(false);
    } else if (type === '') {
      setIsTypeError(true);
      setIsDateError(false);
    } else if (poster === '') {
      setIsPosterError(true);
      setIsTypeError(false);
    } else {
      // siapkan temlate data yang ingin di input
      const movie = {
        id: nanoid(),
        title: title,
        year: date,
        type: type,
        poster: poster,
      };

      setMovies([...movies, movie]);
      setIsTitleError(false);
      setIsDateError(false);
      setIsTypeError(false);
      setIsPosterError(false);
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
            <div className="from_grup">
              <label className={style.from__label} htmlFor="title">
                Title
              </label>
              <br />
              <input onChange={handleTitle} className={style.from__input} type="text" id="title" value={title} />
              {/* operator kondisi */}
              {/* jika error: true maka tampil data wajib diisi */}
              {isTitleError && (
                <Alert>
                  <p className={style.error}>Title Wajib diisi</p>
                </Alert>
              )}
              <br />
            </div>
            <div className="from_grup">
              <label className={style.from__label} htmlFor="year">
                Year
              </label>
              <br />
              <input onChange={handleDate} className={style.from__input} type="number" id="date" value={date} />
              {/* operator kondisi */}
              {/* jika error: true maka tampil data wajib diisi */}
              {isDateError && (
                <Alert>
                  <p className={style.error}>Date Wajib diisi</p>
                </Alert>
              )}
              <br />
            </div>
            <div className="from_grup">
              <label className={style.from__label} for="">
                Pilih Opsi
              </label>
              <br />
              <select name="pilih" id="pilih" onChange={handleType} value={type}>
                <option value="">Pilh :</option>
                <option value="action">Action</option>
                <option value="lupa">lupa</option>
                <option value="movie">Movie</option>
              </select>
              {isTypeError && (
                <Alert>
                  <p className={style.error}>Type Wajib diisi</p>
                </Alert>
              )}
            </div>
            <div className="from_grup">
              <br />
              <label className={style.from__label} for="">
                Masukan link Foto
              </label>
              <br />
              <input onChange={handlePoster} className={style.from__input} type="url" id="poster" value={poster} />
              {isPosterError && (
                <Alert>
                  <p className={style.error}>Gambar Wajib diisi</p>
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

export default From;
