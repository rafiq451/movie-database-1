// import styled-componetns
import styled from 'styled-components';
const MovieStyled = styled.div`
  img {
    max-width: 100%;
    margin-bottom: 1rem;
  }
  h3 {
    color: var(--primary);
    margin-bottom: 1rem;
  }
  p {
    color: var(--secondry);
    margin-bottom: 1rem;
  }

  .container {
    overflow: hidden;
    width: 80%;
    position: relative;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
    border-radius: 20px;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  .rating {
    width: 30%;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    border-radius: 0 0 10px 0;
    /* z-index: 99; */
  }
  p.setRating {
    color: white;
    padding: 2px;
    font-size: medium;
  }
  @media screen and (min-width: 768px) {
    flex-basis: 50%;
    .container {
      height: 75%;
    }
    /* margin-left: 2px; */
  }

  @media screen and (min-width: 992px) {
    padding: 1rem;
    flex-basis: 25%;
    max-width: 100%;
    .container {
      height: 68%;
      width: 100%;
    }
  }
`;
// tangkap props
const Movie = (props) => {
  // destructing object props
  const { movie } = props;

  // memakai fungsi substring
  // const str = ;
  // const substring1 = str.;

  // catatan
  // maaf pak image yang di home kurang rapih di karenakan datanya masih mengambil dari object of array di file data.js
  // yang mana kami tidak bisa mengatur dimensinya
  // mungkin kedepan nya akan saya rapihkan

  return (
    <MovieStyled>
      <div className="container">
        <div className="rating">
          <p className="setRating">
            ⭐ <span>{movie.vote_average || movie.rate}</span>
          </p>
        </div>
        <img src={movie.poster || `https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
      </div>
      <h3>{movie.title}</h3>
      <p>{movie.year || movie.release_date.substring(0, 4)}</p>
    </MovieStyled>
  );
};

export default Movie;
