import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { fhechGetCreditsMovies } from 'api';
import image from '../../img/film-card.jpg';
import { Loader } from 'components/Loader/Loader';
import { CastWraper, CastCard, CastImg, CastName } from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('ideal');

  useEffect(() => {
    const movieCastFech = async () => {
      setStatus('laoding');
      try {
        const movieData = await fhechGetCreditsMovies(id);

        if (movieData.cast.length === 0) {
          setStatus('noIdeal');
          return;
        }

        const arrMovieData = movieData.cast.map(e => {
          const { id, name, character, profile_path } = e;
          const profilePath = profile_path
            ? `https://image.tmdb.org/t/p/w500/${profile_path}`
            : image;
          return { id, name, character, profilePath };
        });
        setCast([...arrMovieData]);
        setStatus('ideal');
      } catch {
        toast.error(
          `Что-то пошло не так, попробуйте перезагрузить страницу попозже.`
        );
        setStatus('error');
      }
    };

    movieCastFech();
  }, [id]);

  if (status === 'laoding') {
    return <Loader />;
  }

  if (status === 'ideal') {
    return (
      <CastWraper>
        {cast.map(e => {
          const { id, name, character, profilePath } = e;
          return (
            <CastCard key={id}>
              <CastImg src={profilePath} alt="name" />
              <CastName>{name}</CastName>
              <p>Character: {character}</p>
            </CastCard>
          );
        })}
      </CastWraper>
    );
  }

  if (status === 'noIdeal') {
    return <p>We don't have any cast for this movie.</p>;
  }

  if (status === 'error') {
    return;
  }
};

export default Cast;
