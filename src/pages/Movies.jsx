import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import Pagination from 'rc-pagination';
import { fhechSearchMovies } from 'api';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(() => searchParams.get('query') ?? '');
  const [page, setPage] = useState(() => searchParams.get('page') ?? 1);
  const [totalResults, setTotalResults] = useState(0);
  const [status, setStatus] = useState('ideal');

  const onChange = page => {
    setPage(page);
  };

  const onSubmitMovie = e => {
    e.preventDefault();
    const queryMovie = e.target[0].value.trim().toLocaleLowerCase();

    if (queryMovie === '') {
      toast(`Ввведите текст`);
      return;
    }

    setSearchParams({ query: queryMovie });
    setQuery(queryMovie);
  };

  useEffect(() => {
    const searchApi = async (query, page) => {
      setStatus('laoding');
      setMovies([]);

      try {
        const movieList = await fhechSearchMovies(query, page);

        if (movieList.total_results === 0) {
          toast(`По вашему запросу: ${query}, мы ничего не нашли.`);
          setMovies([]);
          setTotalResults(0);
          setStatus('ideal');
          return;
        }

        const arrMovieList = movieList.results.map(e => {
          const { id, title } = e;
          return { id, title };
        });

        setSearchParams({ page, query });
        setTotalResults(movieList.total_results);
        setMovies(arrMovieList);
        setStatus('ideal');
      } catch {
        toast.error(
          `Что-то пошло не так, попробуйте перезагрузить страницу попозже.`
        );
        setStatus('ideal');
      }
    };

    if (query) searchApi(query, page);
  }, [query, page, setSearchParams]);

  return (
    <>
      <SearchMovie onSubmit={onSubmitMovie} query={query} />
      {movies.length !== 0 && <MovieList movies={movies} />}
      {status === 'laoding' && <Loader />}
      {/* <MovieList movies={movies} /> */}

      {totalResults > 20 && (
        <Pagination
          onChange={onChange}
          current={page}
          total={totalResults}
          pageSize={20}
        />
      )}
    </>
  );
};

export default Movies;
