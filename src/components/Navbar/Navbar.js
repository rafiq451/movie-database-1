import { Link } from 'react-router-dom';
import NavbarStyle from './navbar.modules';
// import NavbarStyle

const Navbar = () => {
  // seleksi DOM
  // const li = document.querySelector('div ul li a');
  // li.addEventListener('click', function () {
  //   alert('hallo');
  // });

  return (
    <NavbarStyle>
      <nav>
        <div>
          <h1>Movie App</h1>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/" className="list">
                Home
              </Link>
            </li>
            <li>
              <Link to="/movie/create" className="list">
                Add Movie
              </Link>
            </li>
            <li>
              <Link to="/movie/popular" className="list">
                Popular
              </Link>
            </li>
            <li>
              <Link to="/movie/now" className="list">
                Now Playing
              </Link>
            </li>
            <li>
              <Link to="/movie/top" className="list">
                Top Rated
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </NavbarStyle>
  );
};
export default Navbar;
