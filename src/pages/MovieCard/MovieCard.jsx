import { useState, useEffect, useRef } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import toast from 'react-hot-toast';
import { fhechGetDetailshMovies } from 'api';
import image from '../../img/film-card.jpg';
import { StyledLinkCard } from './MovieCard.styled';

export const MovieCard = () => {
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const movieDetailsFech = async () => {
      try {
        const movieData = await fhechGetDetailshMovies(id);
        const { title, overview, genres, poster_path } = movieData;
        const posterPath = poster_path
          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
          : image;
        const genresString = genres.map(e => e.name).join(' ');

        setMovie({ title, overview, genresString, posterPath });
      } catch {
        toast.error(
          `Что-то пошло не так, попробуйте перезагрузить страницу попозже.`
        );
      }
    };

    movieDetailsFech();
  }, []);

  const { title, overview, genresString, posterPath } = movie;

  return (
    <div>
      <div>
        <StyledLinkCard to={backLinkHref.current}>Go back</StyledLinkCard>
      </div>
      <div>
        <img src={posterPath} alt={title} />
        <h2>{title}</h2>
        <p>User Score: ???</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genresString}</p>
      </div>
      <div>
        <p>Additional information</p>
        <StyledLinkCard to="cast">Cast</StyledLinkCard>
        <StyledLinkCard to="reviews">Reviews</StyledLinkCard>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
