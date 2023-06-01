import { useEffect, useState } from 'react';
import Button from '../ui/Button';
// import HeroStyle
import HeroStyle from './hero.modules';
import Heading from '../ui/Typography/Heading';
import Paragraph from '../ui/Typography/Paragraph';
import Image from '../ui/Media/image';

const Hero = () => {
  const [movie, SetMovie] = useState('');
  useEffect(function () {
    async function fectMovie() {
      const url = 'https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590';
      const response = await fetch(url);
      const data = await response.json();
      SetMovie(data);
    }

    fectMovie();
  }, []);
  return (
    // jika class nya tidak mau dihapus maka panggil class nya di components Hero yang sudah di style ulang
    <HeroStyle>
      <section>
        <div className="hero__left">
          <Heading>{movie.Title}</Heading>
          <h3>Genre {movie.Genre}</h3>
          <Paragraph>{movie.Plot}</Paragraph>
          <Button md color="primary">
            Watch
          </Button>
        </div>
        <div className="styled.hero__right">
          <Image src={movie.Poster} alt="" />
        </div>
      </section>
    </HeroStyle>
  );
};
export default Hero;
