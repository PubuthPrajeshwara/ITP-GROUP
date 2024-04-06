import React, { useState } from 'react';
import './Search.css'

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className='searchbar'>
            <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search by product name" />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default Search;



