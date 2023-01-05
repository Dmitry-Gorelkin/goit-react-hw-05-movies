import styled from 'styled-components';

export const BoxSearch = styled.div`
  padding: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px; ;
`;

export const SearchInput = styled.input`
  margin-right: ${p => p.theme.space[4]}px;
`;

export const SearchButton = styled.button`
  width: 100px;

  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accent};

  padding-top: ${p => p.theme.space[1]}px;
  padding-bottom: ${p => p.theme.space[1]}px;

  border: none;
  border-radius: ${p => p.theme.space[3]}px;

  cursor: pointer;

  :hover,
  :focus-visible {
    box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.2);
  }
`;
