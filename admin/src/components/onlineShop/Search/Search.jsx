import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      navigate('/search-results', { state: { searchTerm } });
    } else {
      alert('Cannot search with an empty field');
    }
  };

  return (
    <div className='searchbar'>
      <input
        type="text"
        placeholder="Search your product"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
