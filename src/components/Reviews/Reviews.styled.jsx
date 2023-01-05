import styled from 'styled-components';

export const ReviewsWraper = styled.ul`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.space[3]}px;
`;

export const ReviewsCard = styled.li`
  display: block;

  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;

  border-bottom: 1px solid rgba(0, 194, 224, 0.5);

  p:not(:last-child) {
    margin-bottom: ${p => p.theme.space[2]}px;
  }
`;

export const ReviewsName = styled.span`
  font-weight: bold;
`;

export const BoxLoadMore = styled.div`
  display: flex;
  justify-content: center;

  padding: ${p => p.theme.space[3]}px;
`;

export const LoadMore = styled.div`
  width: ${p => p.theme.space[7]}px;

  display: flex;
  justify-content: center;

  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;

  border-radius: ${p => p.theme.space[3]}px;

  :hover,
  :focus-visible {
    color: ${p => p.theme.colors.accent};
    box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.2);
  }
`;
