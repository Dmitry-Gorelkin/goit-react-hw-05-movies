import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { fhechGetReviewsMovies } from 'api';
import { Loader } from 'components/Loader/Loader';
import {
  ReviewsWraper,
  ReviewsCard,
  ReviewsName,
  BoxLoadMore,
  LoadMore,
} from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('ideal');

  const nextPage = () => setPage(prevState => prevState + 1);

  useEffect(() => {
    const movieReviewsFech = async (id, page) => {
      try {
        const movieData = await fhechGetReviewsMovies(id, page);
        setStatus('laoding');

        if (movieData.total_results === 0) {
          setStatus('noIdeal');
          return;
        }

        const arrMovieData = movieData.results.map(e => {
          const { id, author, content } = e;
          return { id, author, content };
        });

        setReviews(prevState => [...prevState, ...arrMovieData]);
        page < movieData.total_pages
          ? setStatus('loadMore')
          : setStatus('ideal');
      } catch {
        toast.error(
          `Что-то пошло не так, попробуйте перезагрузить страницу попозже.`
        );
        setStatus('error');
      }
    };

    movieReviewsFech(id, page);
  }, [id, page]);

  if (status === 'laoding') {
    return <Loader />;
  }

  if (status === 'error') {
    return;
  }

  return (
    <>
      {reviews.length !== 0 && (
        <ReviewsWraper>
          {reviews.map(e => {
            const { id, author, content } = e;
            return (
              <ReviewsCard key={id}>
                <p>
                  Author: <ReviewsName>{author}</ReviewsName>
                </p>
                <p>{content}</p>
              </ReviewsCard>
            );
          })}
        </ReviewsWraper>
      )}

      {status === 'noIdeal' && <p>We don't have any reviews for this movie.</p>}

      {status === 'loadMore' && (
        <BoxLoadMore>
          <LoadMore onClick={nextPage}>Load More</LoadMore>
        </BoxLoadMore>
      )}
    </>
  );
};

export default Reviews;
