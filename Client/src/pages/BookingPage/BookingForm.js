// Form.js
import React, { useState } from 'react';
import './BookingForm.css'; // Import your CSS file

const Form = () => {
  const [formData, setFormData] = useState({
    ownerName: '',
    email: '',
    phone: '',
    specialNotes: '',
    status: 'Pending',
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
      <h2>Booking Form</h2>
      <div className="form-columns">
        <div className="form-column">
          <h3>OWNER DETAILS</h3>
          <label>Name:</label>
          <input
            type="text"
            name="ownerName"
            placeholder="Name"
            value={formData.ownerName}
            onChange={handleInputChange}
          />
          <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
         <label>Phone:</label>
        <input
          type="tel"
          name="phone"
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
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          required
        />
        <label>Service Type:</label>
        <input
          type="text"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleInputChange}
          required
        />
        <label>Vehicle Model:</label>
         <input 
          type="text"
          name="vehicleModel"
          value={formData.vehicleModel} 
          onChange={handleInputChange}
          required
        />
        <label>Vehicle Model:</label>
         <input 
          type="text"
          name="vehicleNumber"
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
      <button type="submit">Book Now</button>
    </div>
  );
};

export default Form;