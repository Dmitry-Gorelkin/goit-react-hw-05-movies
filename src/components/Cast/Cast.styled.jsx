import styled from 'styled-components';

export const CastWraper = styled.ul`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.space[3]}px;
`;

export const CastCard = styled.li`
  display: block;
  padding: ${p => p.theme.space[3]}px;
`;

export const CastImg = styled.img`
  width: 100px;
`;

export const CastName = styled.p`
  font-weight: bold;
`;
