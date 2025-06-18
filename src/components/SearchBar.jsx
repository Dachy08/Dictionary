import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, setSearchTerm, onSearch, error }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className={`search-bar ${error ? 'error' : ''}`}>
        <input
          type="text"
          placeholder="Search for any word…"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="none" stroke="#A445ED" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"/></svg>
        </button>
      </div>
      {error && <p className="error-text">Whoops, can’t be empty…</p>}
    </form>
  );
};

export default SearchBar;