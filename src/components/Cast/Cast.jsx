import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { fhechGetCreditsMovies } from 'api';
import image from '../../img/film-card.jpg';

export const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const movieCastFech = async () => {
      try {
        const movieData = await fhechGetCreditsMovies(id);

        const arrMovieData = movieData.cast.map(e => {
          const { id, name, character, profile_path } = e;
          const profilePath = profile_path
            ? `https://image.tmdb.org/t/p/w500/${profile_path}`
            : image;
          return { id, name, character, profilePath };
        });
        setCast([...arrMovieData]);
      } catch {
        toast.error(
          `Что-то пошло не так, попробуйте перезагрузить страницу попозже.`
        );
      }
    };

    movieCastFech();
  }, []);

  return (
    <ul>
      {cast.map(e => {
        const { id, name, character, profilePath } = e;
        return (
          <li key={id}>
            <img src={profilePath} alt="name" />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};
