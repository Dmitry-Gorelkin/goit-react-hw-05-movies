import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BoxCardBack = styled.div`
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const StyledLinkCardBack = styled(NavLink)`
  width: ${p => p.theme.space[7]}px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding: ${p => p.theme.space[3]}px;

  text-decoration: none;
  color: ${p => p.theme.colors.dark};

  border-radius: ${p => p.theme.space[3]}px;

  cursor: pointer;

  :hover,
  :focus-visible {
    color: ${p => p.theme.colors.accent};
    box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.2);
  }
`;

export const CardWraper = styled.div`
  display: flex;

  padding: ${p => p.theme.space[3]}px;

  margin-bottom: ${p => p.theme.space[4]}px;
  box-shadow: 0px 0px 16px 2px rgba(0, 194, 224, 0.5);
`;

export const CardImg = styled.img`
  width: 300px;
`;

export const CardOverview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
`;

export const BoxAddInfo = styled.div`
  display: flex;
  flex-direction: column;

  border-bottom: 1px solid rgba(0, 194, 224, 0.5);

  padding: ${p => p.theme.space[3]}px;

  margin-bottom: ${p => p.theme.space[4]}px;

  *:not(:last-child) {
    margin-bottom: ${p => p.theme.space[2]}px;
  }
`;

export const StyledLinkCard = styled(NavLink)`
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

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.accent};
    box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.2);
  }
`;
