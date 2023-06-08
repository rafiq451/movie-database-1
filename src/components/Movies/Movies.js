import Movie from '../Movie/Movie';
import { nanoid } from 'nanoid';

// import styled-components
import styled from 'styled-components';

// membuat styled-components di dalam componet
const MovieStyled = styled.div`
  padding: 2rem;
  text-align: center;
  font-family: Poppins;
  background-color: #f8f9f9;

  h2 {
    margin-bottom: 2rem;
    color: var(--secondry);
    font-size: 30px;
  }

  @media screen and (min-width: 768px) {
    .movies {
      flex-direction: row;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 1200px;
      margin: 1rem auto;
    }
  }
`;

const Movies = (props) => {
  // destructing props
  const { movies, setMovies } = props;
  function tabahFilm() {
    const movie = {
      id: nanoid(4),
      title: 'Spiral Jigsaw',
      year: 2021,
      type: 'Movie',
      poster: 'https://picsum.photos/300/400',
    };
    setMovies([...movies, movie]);
  }
  return (
    <MovieStyled>
      <h2>{props.title}</h2>
      <section>
        <div className="movies">
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
        <button onClick={tabahFilm}>Add Movie</button>
      </section>
    </MovieStyled>
  );
};
export default Movies;
// title="Letest Movie"
