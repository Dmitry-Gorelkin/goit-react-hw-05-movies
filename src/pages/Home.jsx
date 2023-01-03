import { useEffect, useState } from 'react';
import { fhechPopularMovies } from 'api';
import { Navigation } from 'components/Navigation/Navigation';
import { MovieList } from 'components/MovieList/MovieList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movieListPopularFech = async () => {
      try {
        const movieList = await fhechPopularMovies();

        const arrMovieList = movieList.results.map(e => {
          const { id, title } = e;
          return { id, title };
        });

        setMovies([...arrMovieList]);
      } catch {}
    };

    movieListPopularFech();
  }, []);

  return (
    <>
      <Navigation />
      <h2>Trending today</h2>
      <MovieList movies={movies} />
    </>
  );
};
