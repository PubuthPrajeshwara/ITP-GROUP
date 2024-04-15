import React, { useState, useEffect } from 'react';
import Navbar from '../../Navbar/Navbar';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import UpdateIcon from '@mui/icons-material/Update';
import Category from '../OrderCategory/OrderCategory';
import Search from '../OrderSearch/OrderSearch';
import './OrderList.css';

function OrderList() {
    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchOrders();
    }, [selectedCategory, searchTerm]);

    const fetchOrders = async () => {
        try {
            const response = await fetch('http://localhost:4000/orders');
            if (!response.ok) {
                throw new Error('Failed to fetch orders');
            }
            const data = await response.json();
            setOrders(data.orders || []);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    useEffect(() => {
        filterOrders();
    }, [orders, selectedCategory, searchTerm]);

    const filterOrders = () => {
        let filtered = orders;
        if (selectedCategory !== '') {
            filtered = filtered.filter(order => order.status === selectedCategory);
        }
        if (searchTerm !== '') {
            const query = searchTerm.toLowerCase();
            filtered = filtered.filter(order =>
                order.fullName.toLowerCase().includes(query) ||
                order.contact.toLowerCase().includes(query) ||
                order.email.toLowerCase().includes(query)
            );
        }
        setFilteredOrders(filtered);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    const handleDeleteOrder = async (orderId) => {
        try {
            const response = await fetch(`http://localhost:4000/order/${orderId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete order');
            }
            // Remove the deleted order from the filteredOrders array
            const updatedOrders = filteredOrders.filter(order => order.orderId !== orderId);
            setFilteredOrders(updatedOrders);
        } catch (error) {
            console.error('Error deleting order:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="order-filter">
                <Category onCategoryChange={handleCategoryChange} />
                <Search onSearch={handleSearch} />
            </div>
            <div className="orders-table-container">
                <table className="orders-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Contact</th>
                            <th>Payment Method</th>
                            <th>Total Amount</th>
                            <th>Order Date</th>
                            <th>Status</th>
                            <th>Items</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.map(order => (
                            <tr key={order.orderId} className="order-row">
                                <td>{order.orderId}</td>
                                <td>{order.fullName}</td>
                                <td>{order.email}</td>
                                <td>{order.address}</td>
                                <td>{order.contact}</td>
                                <td>{order.paymentMethod}</td>
                                <td>{order.totalAmount}</td>
                                <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                                <td>{order.status}</td>
                                <td>
                                    <ul className="item-list">
                                        {order.items.map((item, index) => (
                                            <li key={index} className="item">{item.productId} - Quantity: {item.quantity}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td className="action-column">
                                    <UpdateIcon className="update-icon" />
                                    <DeleteOutlineIcon className="delete-icon" onClick={() => handleDeleteOrder(order.orderId)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OrderList;
