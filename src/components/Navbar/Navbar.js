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
            <li className={style.navbar__items}>Home</li>
            <li className={style.navbar__items}>Add Movie</li>
            <li className={style.navbar__items}>Popular</li>
            <li className={style.navbar__items}>Now Playing</li>
            <li className={style.navbar__items}>Top Rated</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
