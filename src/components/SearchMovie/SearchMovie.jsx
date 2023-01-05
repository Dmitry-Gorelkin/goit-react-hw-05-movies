import { useState } from 'react';
import { BoxSearch, SearchInput, SearchButton } from './SearchMovie.styled';

export const SearchMovie = ({ query, onSubmit }) => {
  const [value, setValue] = useState(() => query);

  return (
    <BoxSearch>
      <form onSubmit={onSubmit}>
        <SearchInput
          type="text"
          placeholder="Search name movie"
          value={value}
          onChange={e => setValue(e.target.value)}
        />

        <SearchButton type="submit">Search</SearchButton>
      </form>
    </BoxSearch>
  );
};
