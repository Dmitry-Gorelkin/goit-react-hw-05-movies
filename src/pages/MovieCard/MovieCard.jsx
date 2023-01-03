import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import toast from 'react-hot-toast';
import { fhechGetDetailshMovies } from 'api';
import image from '../../img/film-card.jpg';
import { StyledLinkCardBack, StyledLinkCard } from './MovieCard.styled';
import { Loader } from 'components/Loader/Loader';

const MovieCard = () => {
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
  }, [id]);

  const { title, overview, genresString, posterPath } = movie;

  return (
    <>
      <div>
        <StyledLinkCardBack to={backLinkHref.current}>
          Go back
        </StyledLinkCardBack>
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
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieCard;
