import { useEffect, useState } from 'react';
import DetailMovie from '../../components/DetailMovie';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Movies from '../../components/Movies/Movies';
import ENDPOINTS from '../../components/utils/constants/endpoints';

const Detail = () => {
  const params = useParams();
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    getRecomendation();
  }, [params.id]);

  async function getRecomendation() {
    const URL = ENDPOINTS.getRecommendations(params.id);
    const response = await axios(URL);

    setMovie(response.data.results);
  }

  return (
    <>
      <DetailMovie />
      <Movies movies={movies} title="Recommendations" />
    </>
  );
};

export default Detail;
