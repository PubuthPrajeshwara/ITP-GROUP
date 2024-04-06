import React, { useState, useEffect } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import UpdateIcon from '@mui/icons-material/Update';
import './ProdcutList.css';
import SearchProduct from '../Search/Search';
import Category from '../category/category';

const ProductList = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        fetch('http://localhost:4000/allproducts')
            .then((res) => res.json())
            .then((data) => {
                setAllProducts(data);
                setFilteredProducts(data);
            });
    }, []);

    const handleSearch = (searchTerm) => {
        const filtered = allProducts.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        if (category === '') {
            setFilteredProducts(allProducts);
        } else {
            const filtered = allProducts.filter((product) => product.category === category);
            setFilteredProducts(filtered);
        }
    };

    return (
        <div>
            <SearchProduct onSearch={handleSearch} />
            <Category onCategoryChange={handleCategoryChange} /> {/* Add the CategoryFilter component */}
            <div className="ProductList">
                <table className="ProductList-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Image</th>
                            <th>Old Price</th>
                            <th>New Price</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((product, index) => (
                            <tr key={index}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.category}</td>
                                <td>{product.brand}</td>
                                <td>
                                    <img src={product.image} className="ProductList-format-image" alt="" />
                                </td>
                                <td>Rs.{product.new_price}</td>
                                <td>Rs.{product.old_price}</td>
                                <td>{product.description}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <UpdateIcon className="updateIcn" />
                                    <DeleteOutlineIcon className="removeIcn" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductList;