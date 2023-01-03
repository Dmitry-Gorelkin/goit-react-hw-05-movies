import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
`;

export const SlyledLink = styled(NavLink)`
  display: block;
  padding: ${p => p.theme.space[3]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.dark};

  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
    border-radius: ${p => p.theme.space[3]}px;
  }

  &:not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.accent};
  }
`;
