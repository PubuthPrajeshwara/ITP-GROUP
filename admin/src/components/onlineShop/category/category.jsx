import React, { useState } from 'react';

const category = ({ onCategoryChange }) => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
        onCategoryChange(category);
    };

    return (
        <div>
            <label htmlFor="category">Filter by Category: </label>
            <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">All</option>
                <option value="Interiour">Interior</option>
                <option value="Exteriour">Exterior</option>
                <option value="Car_care">Car Care</option>
            </select>
        </div>
    );
};

export default category;
