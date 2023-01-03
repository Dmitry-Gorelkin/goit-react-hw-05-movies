import { useState } from 'react';

export const SearchMovie = ({ query, onSubmit }) => {
  const [value, setValue] = useState(() => query);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search name movie"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};
