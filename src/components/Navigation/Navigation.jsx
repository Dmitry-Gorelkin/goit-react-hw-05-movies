import { Nav, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </Nav>
  );
};
