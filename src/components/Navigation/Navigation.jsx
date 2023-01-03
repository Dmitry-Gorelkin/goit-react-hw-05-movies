import { Nav, SlyledLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <SlyledLink to="/">Home</SlyledLink>
      <SlyledLink to="/movies">Movies</SlyledLink>
    </Nav>
  );
};
