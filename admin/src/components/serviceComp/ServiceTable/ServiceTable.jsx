import React, { useState, useEffect } from 'react';
import './ServiceTable.css';
import axios from 'axios';

const ServiceTable = ({ openPop }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Function to fetch service data from backend
        const fetchServices = async () => {
            try {
                // Fetch service data from backend server
                const response = await axios.get("http://localhost:4000/allServices");
                // Set the fetched service data to state
                setServices(response.data);
            } catch (error) {
                console.error("Error fetching services:", error);
            }
        };

        // Call the fetchServices function when the component mounts
        fetchServices();
    }, []); // Empty dependency array ensures useEffect runs only once

    // Function to handle delete button click
    const handleDelete = async (id) => {
        try {
            // Send delete request to backend server
            await axios.delete(`http://localhost:4000/deleteServices/${id}`);
            // Remove the deleted service from the services state
            setServices(services.filter(service => service._id !== id));
            console.log("Service deleted successfully");
        } catch (error) {
            console.error("Error deleting service:", error);
        }
    };
    return (
        <div className='service'>     
            <div className="btblContainer">
            <div className='scrolltbl'>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Service Title</th>
                            <th>Image</th>
                            <th>Estimated Hour</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service, index) => (
                            <tr key={index} className='rwhover'>
                                <td><input className='ckbox' type='checkbox' name='all' /></td>
                                <td>{service.serviceTitle}</td>
                                <td style={{ width: '10rem' }}>{service.image}</td>
                                <td>{service.estimatedHour}</td>
                                <td>{service.details}</td>
                                <td style={{ width: '8.5rem' }}>
                                <button className='accept' onClick={() => openPop(service)}>Edit</button>
                                <button className='delete' onClick={() => handleDelete(service._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
}

export default ServiceTable;
