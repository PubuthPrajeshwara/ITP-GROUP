import React, { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import "./BookingForm.css"; // Import CSS file for styling

const BookingForm = () => {
  const [formData, setFormData] = useState({
    ownerName: "",
    email: "",
    phone: "",
    location: "",
    specialNotes: "",
    serviceType: "",
    vehicleModel: "",
    vehicleNumber: "",
    date: "",
    time: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send form data to backend server
      await axios.post("http://localhost:4000/addbooking", formData);
      alert("Booking submitted successfully!");
      // Optionally, reset the form after submission
      setFormData({
        ownerName: "",
        email: "",
        phone: "",
        location: "",
        specialNotes: "",
        serviceType: "",
        vehicleModel: "",
        date: "",
        time: ""
      });
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("An error occurred while submitting the booking.");
    }
  };

  return (
    <div className="booking-form-container">
    <h2>Booking Form</h2>
    <form onSubmit={handleSubmit}>
      {/* Name */}
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleInputChange}
          required
        />
      </div>
      {/* Email */}
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      {/* Phone */}
      <div className="form-group">
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
      </div>
      {/* Special Notes */}
      <div className="form-group">
        <label>Notes:</label>
        <textarea
          name="specialNotes"
          value={formData.specialNotes}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>
       {/* Location */}
       <div className="form-group">
        <label>Location:</label>
        <select
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Location</option>
          <option value="Location 1">Location 1</option>
          <option value="Location 2">Location 2</option>
          <option value="Location 3">Location 3</option>
        </select>
      </div>
      {/* Service Type */}
      <div className="form-group">
        <label>Service Type:</label>
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Service Type</option>
          <option value="Service 1">Service 1</option>
          <option value="Service 2">Service 2</option>
          <option value="Service 3">Service 3</option>
        </select>
      </div>
      {/* Vehicle Model */}
      <div className="form-group">
        <label>Vehicle Model:</label>
        <input
          type="text"
          name="vehicleModel"
          value={formData.vehicleModel}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Vehicle Number:</label>
        <input
          type="text"
          name="vehicleNumber"
          value={formData.vehicleNumber}
          onChange={handleInputChange}
          required
        />
      </div>
      {/* Date */}
      <div className="form-group">
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
      </div>
      {/* Time */}
      <div className="form-group">
        <label>Time:</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          required
        />
      </div>
      {/* Submit button */}
      <button type="submit">Submit</button>
    </form>
  </div>
  );
};

export default BookingForm;
