import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { fhechPopularMovies } from 'api';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('ideal');

  useEffect(() => {
    const movieListPopularFech = async () => {
      setStatus('laoding');

      try {
        const movieList = await fhechPopularMovies();
        if (movieList.results.length === 0) {
          toast(
            `Что-то пошло не так, попробуйте перезагрузить страницу попозже.`
          );
          setStatus('ideal');
          return;
        }

        const arrMovieList = movieList.results.map(e => {
          const { id, title } = e;
          return { id, title };
        });

        setMovies([...arrMovieList]);
        setStatus('ideal');
      } catch {
        toast.error(
          `Что-то пошло не так, попробуйте перезагрузить страницу попозже.`
        );
        setStatus('ideal');
      }
    };

    movieListPopularFech();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {movies.length !== 0 && <MovieList movies={movies} />}
      {status === 'laoding' && <Loader />}
    </>
  );
};

export default Home;
