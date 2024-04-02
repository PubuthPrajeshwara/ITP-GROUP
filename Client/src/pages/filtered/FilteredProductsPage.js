import React from 'react';
import './FilteredProductsPage.css'
import Item from '../../Components/item/item';
import { useLocation } from 'react-router-dom';

const FilteredProductsPage = () => {
  const location = useLocation();
  const filteredProducts = location.state.filteredProducts;

  return (
    <div className='Filter_products'>
      <h2>Search Results</h2>
      {filteredProducts.length > 0 ? (
        <div className="product-list">
          {filteredProducts.map(product => (
            <Item
              key={product.id}
              name={product.name}
              image={product.image}
              new_price={product.new_price}
              old_price={product.old_price}
            />
          ))}
        </div>
      ) : (
        <p>No matching products found.</p>
      )}
    </div>
  );
};

export default FilteredProductsPage;


