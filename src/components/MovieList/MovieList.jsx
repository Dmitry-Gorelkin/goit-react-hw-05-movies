import { useLocation } from 'react-router-dom';
import {
  MovieListWraper,
  MovieListLine,
  MovieListLink,
} from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <MovieListWraper>
      {movies.map(({ id, title }) => (
        <MovieListLine key={id}>
          <MovieListLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </MovieListLink>
        </MovieListLine>
      ))}
    </MovieListWraper>
  );
};
