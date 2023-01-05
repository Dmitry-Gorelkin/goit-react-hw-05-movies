import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import toast from 'react-hot-toast';
import { BiCaretLeft } from 'react-icons/bi';
import { fhechGetDetailshMovies } from 'api';
import image from '../../img/film-card.jpg';
import {
  BoxCardBack,
  StyledLinkCardBack,
  CardWraper,
  CardImg,
  CardOverview,
  BoxAddInfo,
  StyledLinkCard,
} from './MovieCard.styled';
import { Loader } from 'components/Loader/Loader';

const MovieCard = () => {
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState('ideal');

  useEffect(() => {
    const movieDetailsFech = async () => {
      setStatus('laoding');

      try {
        const movieData = await fhechGetDetailshMovies(id);

        const {
          original_title: title,
          overview,
          genres,
          poster_path,
          vote_average: voteAverage,
        } = movieData;

        const posterPath = poster_path
          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
          : image;
        const description = overview ? overview : 'No description';
        const genresString = genres.map(e => e.name).join(' ');

        setMovie({ title, description, genresString, posterPath, voteAverage });
        setStatus('ideal');
      } catch {
        toast.error(
          `Что-то пошло не так, попробуйте перезагрузить страницу попозже.`
        );
        setStatus('error');
      }
    };

    movieDetailsFech();
  }, [id]);

  const { title, description, genresString, posterPath, voteAverage } = movie;

  if (status === 'laoding') {
    return <Loader />;
  }

  if (status === 'error') {
    return (
      <div>
        <img src="image" alt="error" />
      </div>
    );
  }

  if (status === 'ideal') {
    return (
      <>
        <BoxCardBack>
          <StyledLinkCardBack to={backLinkHref.current}>
            <BiCaretLeft size="20px" />
            Go back
          </StyledLinkCardBack>
        </BoxCardBack>
        <CardWraper>
          <CardImg src={posterPath} alt={title} />
          <CardOverview>
            <h2>{title}</h2>
            <p>User Score: {voteAverage}</p>
            <h3>Overview</h3>
            <p>{description}</p>
            <h3>Genres</h3>
            <p>{genresString}</p>
          </CardOverview>
        </CardWraper>
        <BoxAddInfo>
          <p>Additional information:</p>
          <StyledLinkCard to="cast">Cast</StyledLinkCard>
          <StyledLinkCard to="reviews">Reviews</StyledLinkCard>
        </BoxAddInfo>
        <div>
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </>
    );
  }
};

export default MovieCard;
