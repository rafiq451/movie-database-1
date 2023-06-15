import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import styled from 'styled-components';
import Button from '../ui/Button';
import StyledMovie from './detailMovie.modules';
import ENDPOINTS from '../utils/constants/endpoints';

const DetailMovie = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const genres = movie.genres && movie.genres.map((genre) => genre.name).join(', ');
  const trailer = movie.videos && movie.videos.results[0] && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  useEffect(() => {
    getDetailMovie();
  }, [params.id]);

  async function getDetailMovie() {
    const URL = ENDPOINTS.getDetailMovie(params.id);
    const response = await axios(URL);

    setMovie(response.data);
  }

  return (
    <StyledMovie>
      <div className="poster">
        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="" />
      </div>
      <div className="info">
        <h2>{movie.title}</h2>
        <h3>{genres}</h3>
        <p>{movie.overview}</p>
        <Button as="a" target="_blank" href={trailer} md color="primary">
          Watch
        </Button>
      </div>
    </StyledMovie>
  );
};

export default DetailMovie;
