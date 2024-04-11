import React, { useContext, useState } from 'react';
import './Checkout.css';
import { ProductContext } from '../../../Context/ProductContext';
import axios from 'axios'; // Import axios for making HTTP requests

const Checkout = () => {
    const { getTotalCartAmount, cartItems, all_product } = useContext(ProductContext);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        contact: '',
        paymentMethod: 'Credit Card', // Default payment method
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const totalAmount = getTotalCartAmount().toFixed(2);
            const items = Object.keys(cartItems).map((itemId) => {
                const itemQuantity = cartItems[itemId];
                if (itemQuantity > 0) {
                    const product = all_product.find((product) => product.id === Number(itemId));
                    if (product) {
                        return {
                            productId: product.id,
                            quantity: itemQuantity,
                            totalPrice: product.new_price * itemQuantity,
                        };
                    }
                }
                return null;
            }).filter(Boolean);
    
            // Display confirmation box
            const confirmed = window.confirm('Are you sure you want to place this order?');
            
            if (confirmed) {
                const authToken = localStorage.getItem('auth-token');
                if (authToken) {
                    const response = await axios.post('http://localhost:4000/checkout', {
                        ...formData,
                        totalAmount,
                        items,
                    }, {
                        headers: {
                            'auth-token': authToken
                        }
                    });
    
                    setFormData({
                        fullName: '',
                        email: '',
                        address: '',
                        contact: '',
                        paymentMethod: 'Cash On Delivery',
                    });
    
                    console.log('Order placed successfully. Order ID:', response.data.orderId);
                    window.location.replace("/onlineshop");
                    window.alert("Your order placed successfully");
                } else {
                    console.error('No authentication token found.');
                    // Handle case where authentication token is missing
                }
            } else {
                console.log('Order placement cancelled by user.');
            }
        } catch (error) {
            console.error('Error while placing order:', error.response.data.error);
        }
    };
    
    

    return (
        <div className='Checkout'>
            <h2>Checkout</h2>
            <div className='checkout-items'>
                {/* Display items from the cart */}
                {Object.keys(cartItems).map((itemId) => {
                    const itemQuantity = cartItems[itemId];
                    if (itemQuantity > 0) {
                        const product = all_product.find((product) => product.id === Number(itemId));
                        if (product) {
                            return (
                                <div key={itemId}>
                                    {/* Render item details */}
                                    <p>Name: {product.name}</p>
                                    <img className='sampleimg' src={product.image} alt=""/>
                                    <p>Quantity: {itemQuantity}</p>
                                    <p>Total Price: Rs.{(product.new_price * itemQuantity).toFixed(2)}</p>    
                                </div>
                            );
                        }
                    }
                    return null;
                })}
            </div>

            <form onSubmit={handleSubmit}>
                {/* Input fields for customer information */}
                <input
                    type='text'
                    name='fullName'
                    placeholder='Full Name'
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />
                <input
                    type='email'
                    name='email'
                    placeholder='Email Address'
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name='address'
                    placeholder='Shipping Address'
                    value={formData.address}
                    onChange={handleChange}
                    required
                ></textarea>
                <input
                    type='tel'
                    name='contact'
                    placeholder='Contact Number'
                    value={formData.contact}
                    onChange={handleChange}
                    required
                />
                {/* Dropdown for payment method */}
                <select name='paymentMethod' value={formData.paymentMethod} onChange={handleChange}>
                    <option value='Cash On Delivery'>Cash On Delivery</option>
                </select>
                <div className='checkout-total'>
                    {/* Display total amount */}
                    <h3>Total Amount: Rs.{getTotalCartAmount().toFixed(2)}</h3>
                </div>
                {/* Button to place order */}
                <button type='submit'>Place Order</button>
            </form>
        </div>
    );
};

export default Checkout;
