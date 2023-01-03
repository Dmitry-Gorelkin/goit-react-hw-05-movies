import { Routes, Route } from 'react-router-dom';
import { Container } from './Container/Container.styled';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieCard } from 'pages/MovieCard/MovieCard';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieCard />} />
      </Routes>
    </Container>
  );
};
