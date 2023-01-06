import { useState } from 'react';
import PropTypes from 'prop-types';
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

SearchMovie.propTypes = {
  query: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
