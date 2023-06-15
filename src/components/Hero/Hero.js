import { useEffect, useState } from 'react';
import Button from '../ui/Button';
// import HeroStyle
import HeroStyle from './hero.modules';
import Heading from '../ui/Typography/Heading';
import Paragraph from '../ui/Typography/Paragraph';
import Image from '../ui/Media/image';
import axios from 'axios';
import ENDPOINTS from '../utils/constants/endpoints';

const Hero = () => {
  const [movie, SetMovie] = useState('');

  // memanggil API
  // const API_KEY = process.env.REACT_APP_API_KEY;

  // ambil properti gendres dan ubah nya manjadi string
  const genres = movie && movie.genres.map((genre) => genre.name).join(', ');
  // console.log(genres);

  // ambil trailer video
  const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;
  // console.log(trailer);

  useEffect(() => {
    getDetailMovies();
  }, []);

  // mendapatkan 1 Data dari Trending Movies
  async function getTrendingMovies() {
    // const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios(ENDPOINTS.TRANDINGMOVIES);
    return response.data.results[3];
  }

  // Membuat fungsi untuk mengambil lebih Detail Movies
  async function getDetailMovies() {
    // ambil satu data trending movies, lalu ambil id-nya
    const trendingMovies = await getTrendingMovies();
    const id = trendingMovies.id;

    // fetch detail movie berdasarkan id
    // const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const URL = ENDPOINTS.getTrendingMovies(id);

    const response = await axios(URL);
    console.log(response.data);
    SetMovie(response.data);
  }
  // useEffect(function () {
  //   async function fectMovie() {
  //     const url = 'https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590';
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     SetMovie(data);
  //   }

  //   fectMovie();
  // }, []);

  return (
    // jika class nya tidak mau dihapus maka panggil class nya di components Hero yang sudah di style ulang
    <HeroStyle>
      <section>
        <div className="hero__left">
          <Heading>{movie.title}</Heading>
          <h3>{genres}</h3>
          <Paragraph>{movie.overview}</Paragraph>
          <Button as="a" target="_blank" href={trailer} md color="primary">
            Watch
          </Button>
        </div>
        <div className="styled.hero__right">
          <Image src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
        </div>
      </section>
    </HeroStyle>
  );
};
export default Hero;
