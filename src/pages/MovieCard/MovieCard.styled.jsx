import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLinkCardBack = styled(NavLink)`
  display: block;
  padding: ${p => p.theme.space[3]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.dark};

  :hover,
  :focus-visible {
    color: ${p => p.theme.colors.accent};
    box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledLinkCard = styled(NavLink)`
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
