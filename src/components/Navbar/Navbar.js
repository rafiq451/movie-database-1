import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
const Navbar = () => {
  return (
    <div className={style.container}>
      <nav className={style.navbar}>
        <div>
          <h1 className={style.navbar__brand}>Movie App</h1>
        </div>
        <div>
          <ul className={style.navbar__list}>
            <li className={style.navbar__items}>
              <Link to="/" className={style.list}>
                Home
              </Link>
            </li>
            <li className={style.navbar__items}>
              <Link to="/movie/create" className={style.list}>
                Add Movie
              </Link>
            </li>
            <li className={style.navbar__items}>
              <Link to="/movie/popular" className={style.list}>
                Popular
              </Link>
            </li>
            <li className={style.navbar__items}>
              <Link to="/movie/now" className={style.list}>
                Now Playing
              </Link>
            </li>
            <li className={style.navbar__items}>
              <Link to="/movie/top" className={style.list}>
                Top Rated
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
