import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import all_products from '../../assets/products/all_products';
import './ProductSearch.css';

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      const filteredProducts = all_products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      navigate('/search-results', { state: { filteredProducts } });
    } else {
      alert('Can not search field empty');
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

export default ProductSearch;





