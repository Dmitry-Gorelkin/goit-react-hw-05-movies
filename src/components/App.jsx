import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Container } from './Container/Container.styled';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieCard } from 'pages/MovieCard/MovieCard';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieCard />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Container>

      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          error: {
            duration: 2000,
          },
        }}
      />
    </>
  );
};
