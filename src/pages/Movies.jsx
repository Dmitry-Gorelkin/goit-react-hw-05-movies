import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';
import { MovieList } from 'components/MovieList/MovieList';
import { fhechSearchMovies } from 'api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(() => searchParams.get('query') ?? '');

  const onSubmitMovie = e => {
    e.preventDefault();
    const queryMovie = e.target[0].value.trim().toLocaleLowerCase();

    if (queryMovie === '') {
      console.log('пустая строка');
      return;
    }

    setSearchParams({ query: queryMovie });
    setQuery(queryMovie);
  };

  useEffect(() => {
    const searchApi = async query => {
      try {
        const movieList = await fhechSearchMovies(query);
        if (movieList.results.length === 0) {
          toast(`По вашему запросу: ${query}, мы ничего не нашли.`);
          return;
        }

        const arrMovieList = movieList.results.map(e => {
          const { id, title } = e;
          return { id, title };
        });

        setMovies(prevState => [...prevState, ...arrMovieList]);
      } catch {
        toast.error(
          `Что-то пошло не так, попробуйте перезагрузить страницу попозже.`
        );
      }
    };

    if (query) searchApi(query);
  }, [query]);

  return (
    <>
      <SearchMovie onSubmit={onSubmitMovie} query={query} />
      <MovieList movies={movies} />
    </>
  );
};

export default Movies;
