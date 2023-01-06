import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieListWraper = styled.ul`
  display: flex;
  flex-direction: column;

  margin-bottom: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
`;

export const MovieListLine = styled.li`
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
`;

export const MovieListLink = styled(Link)`
  color: ${p => p.theme.colors.dark};
  text-decoration: none;

  :hover,
  :focus-visible {
    color: ${p => p.theme.colors.accent};
  }
`;
