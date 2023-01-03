import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';
import { MovieList } from 'components/MovieList/MovieList';
import { fhechSearchMovies } from 'api';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(() => searchParams.get('name') ?? '');

  const onSubmitMovie = e => {
    e.preventDefault();
    const queryMovie = e.target[0].value.trim().toLocaleLowerCase();

    if (queryMovie === '') {
      console.log('пустая строка');
      return;
    }

    setSearchParams({ name: queryMovie });
    setQuery(queryMovie);
  };

  useEffect(() => {
    const searchApi = async query => {
      try {
        const movieList = await fhechSearchMovies(query);

        const arrMovieList = movieList.results.map(e => {
          const { id, title } = e;
          return { id, title };
        });

        setMovies([...arrMovieList]);
      } catch {}
    };

    if (query) searchApi(query);
  }, [query]);

  return (
    <>
      <Navigation />
      <h2>Hello MOVIES</h2>
      <SearchMovie onSubmit={onSubmitMovie} />
      <MovieList movies={movies} />
    </>
  );
};
