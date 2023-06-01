// import styled-componetns
import styled from 'styled-components';
const MovieStyled = styled.div`
  img {
    max-width: 100%;
    margin-bottom: 1rem;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);
    border-radius: 20px;
  }
  h3 {
    color: var(--primary);
    margin-bottom: 1rem;
  }
  p {
    color: var(--secondry);
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 768px) {
    flex-basis: 50%;
  }

  @media screen and (min-width: 992px) {
    padding: 1rem;
    flex-basis: 25%;
  }
`;
// tangkap props
const Movie = (props) => {
  // destructing object props
  const { movie } = props;
  return (
    <MovieStyled>
      <img src={movie.poster} alt="" />
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
    </MovieStyled>
  );
};

export default Movie;
