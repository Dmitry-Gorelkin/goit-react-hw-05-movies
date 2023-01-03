import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { fhechGetReviewsMovies } from 'api';

export const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const movieReviewsFech = async () => {
      try {
        const movieData = await fhechGetReviewsMovies(id);
        const arrMovieData = movieData.results.map(e => {
          const { id, author, content } = e;
          return { id, author, content };
        });
        console.log(movieData);

        setReviews([...arrMovieData]);
      } catch {
        toast.error(
          `Что-то пошло не так, попробуйте перезагрузить страницу попозже.`
        );
      }
    };

    movieReviewsFech();
  }, []);

  return (
    <ul>
      {reviews.map(e => {
        const { id, author, content } = e;
        return (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};
