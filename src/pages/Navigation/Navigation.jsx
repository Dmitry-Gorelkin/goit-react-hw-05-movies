import { Loader } from 'components/Loader/Loader';
import { Section } from 'components/Section/Section.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <div>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Nav>
      <Section>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Section>
    </div>
  );
};
