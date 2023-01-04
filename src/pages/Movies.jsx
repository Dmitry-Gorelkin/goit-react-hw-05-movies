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

    setPage(1);
    setQuery(queryMovie);
  };

  useEffect(() => {
    const searchApi = async (query, page) => {
      setStatus('laoding');
      setMovies([]);
      setTotalResults(0);

      try {
        const movieList = await fhechSearchMovies(query, page);

        if (movieList.total_results === 0) {
          toast(`По вашему запросу: ${query}, мы ничего не нашли.`);
          setSearchParams({});
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

      {totalResults > 20 && (
        <Pagination
          onChange={onChange}
          current={page}
          total={totalResults}
          pageSize={20}
          locale={{
            items_per_page: '/ page',
            jump_to: 'Go to',
            jump_to_confirm: 'confirm',
            page: 'Page',
            prev_page: 'Previous Page',
            next_page: 'Next Page',
            prev_5: 'Previous 5 Pages',
            next_5: 'Next 5 Pages',
            prev_3: 'Previous 3 Pages',
            next_3: 'Next 3 Pages',
            page_size: 'Page Size',
          }}
        />
      )}
    </>
  );
};

export default Movies;
