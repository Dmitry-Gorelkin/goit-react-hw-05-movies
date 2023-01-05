import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;

  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  box-shadow: 0px 0px 16px 2px rgba(0, 194, 224, 0.5);
`;

export const StyledLink = styled(NavLink)`
  width: ${p => p.theme.space[7]}px;

  display: flex;
  justify-content: center;

  padding: ${p => p.theme.space[3]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.dark};
  border-radius: ${p => p.theme.space[3]}px;

  cursor: pointer;

  &.active {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.accent};
  }

  &:not(:last-child) {
    margin-right: ${p => p.theme.space[5]}px;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.accent};
    box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.2);
  }
`;
