import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { fhechGetDetailshMovies } from 'api';

export const MovieCard = () => {
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const movieDetailsFech = async () => {
      try {
        const movieData = await fhechGetDetailshMovies(id);
        const { title, overview, genres, poster_path } = movieData;
        const posterPath = `https://image.tmdb.org/t/p/w500/${poster_path}`;
        const genresString = genres.map(e => e.name).join(' ');

        setMovie({ title, overview, genresString, posterPath });
      } catch {}
    };

    movieDetailsFech();
  }, [id]);

  const { title, overview, genresString, posterPath } = movie;

  return (
    <div>
      <div>
        <Link to={backLinkHref}>Go back</Link>
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
    </div>
  );
};
