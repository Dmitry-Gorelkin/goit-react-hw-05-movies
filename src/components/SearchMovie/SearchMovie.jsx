// import { useState } from 'react';

export const SearchMovie = ({ onSubmit }) => {
  // const [query, setQuery] = useState('');

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search name movie"
          // value={query}
          // onChange={e => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
};
