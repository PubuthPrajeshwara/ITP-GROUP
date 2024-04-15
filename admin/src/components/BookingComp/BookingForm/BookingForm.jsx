// Form.js
import React, { useState } from 'react';
import './BookingForm.css'; // Import your CSS file

const BookingForm = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    email: '',
    phone: '',
    specialNotes: '',
    status: '',
    mechanic: '',
    location: '',
    serviceType: '',
    vehicleModel: '',
    vehicleNumber: '',
    date: '',
    time: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="form-container">
     
      <div className="form-columns">
        <div className="form-column">
          <h3>OWNER DETAILS</h3>
          <label>Name:</label>
          <input
            type="text"
            name="ownerName"
            placeholder="Enter Name"
            value={formData.ownerName}
            onChange={handleInputChange}
          />
          <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Ex: pathum@gmail.com"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
         <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          placeholder="+94 "
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
         <label>special Notes:</label>
        <textarea
          name="specialNotes"
          value={formData.specialNotes}
          onChange={handleInputChange}
          required
        ></textarea>
        </div>


        <div className="form-column">
          <h3>VEHICLE DETAILS</h3>
          <label>Location:</label>
          <select
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Location</option>
            <option value="Location 1">Location 1</option>
            <option value="Location 2">Locati    on 2</option>
            <option value="Location 3">Location 3</option>
            {/* Add more options as needed */}
          </select>
        <label>Service Type:</label>
        <select
            name="ServiceType"
            value={formData.serviceType}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Service</option>
            <option value="Location 1">Service 1</option>
            <option value="Location 2">Service 2</option>
            <option value="Location 3">Service 3</option>
            {/* Add more options as needed */}
          </select>
        <label>Vehicle Model:</label>
         <input 
          type="text"
          name="vehicleModel"
          placeholder='Ex: Toyota Corolla'
          value={formData.vehicleModel} 
          onChange={handleInputChange}
          required
        />
        <label>Vehicle Number</label>
         <input 
          type="text"
          name="vehicleNumber"
          placeholder='Ex: WP CA-1234'
          value={formData.vehicleNumber} 
          onChange={handleInputChange}
          required
        />
         <label>Date:</label>
        <input 
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
         <label>Time:</label>
        <input 
          type="time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          required
        />
        </div>
      </div>
      <button type="submit">Add Booking</button>
    </div>
  );
};

export default BookingForm;