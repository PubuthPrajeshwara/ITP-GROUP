import React from 'react'
import './Modal.css'
import { useState } from 'react';

const modal = ({closeModal}) => {
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
    <div className='modal-container' onClick={(e) =>{
      if(e.target.className==='modal-container')closeModal();
    }}>
     <div className="form-container">
      <p >Booking ID: B001</p>
      <div className="form-columns">
        <div className="form-column">
          <h3 style={{color:'#007CB1'}}>OWNER DETAILS</h3>
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
          <h3 style={{color:'#007CB1'}}>VEHICLE DETAILS</h3>
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
        <div class="button-container">
          <button type="submit">Book Now</button>
          
        </div>
    </div>
</div>
  )
}

export default modal;