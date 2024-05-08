import React, { useState } from "react";
import axios from "axios";
//import "./BookingForm.css"; // Import CSS file for styling

const BookingForm = () => {
  const [formData, setFormData] = useState({
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

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

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Validate each field
    if (!formData.ownerName.trim()) {
      errors.ownerName = 'Owner name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Phone number is invalid';
      isValid = false;
    }

    if (!formData.location) {
      errors.location = 'Location is required';
      isValid = false;
    }

    if (!formData.serviceType) {
      errors.serviceType = 'Service type is required';
      isValid = false;
    }

    if (!formData.vehicleModel.trim()) {
      errors.vehicleModel = 'Vehicle model is required';
      isValid = false;
    }

    if (!formData.vehicleNumber.trim()) {
      errors.vehicleNumber = 'Vehicle number is required';
      isValid = false;
    }

    if (!formData.date) {
      errors.date = 'Date is required';
      isValid = false;
    }

    if (!formData.time) {
      errors.time = 'Time is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };


  return (
    <div className="booking-form-container">
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-column">
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
          {errors.ownerName && <span className="error">{errors.ownerName}</span>}
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          {errors.email && <span className="error">{errors.email}</span>}

          </div>
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
          {errors.phone && <span className="error">{errors.phone}</span>}
          <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="form-column">
          <div className="form-group">
            <label>Notes:</label>
            <textarea
              name="specialNotes"
              value={formData.specialNotes}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Service Type:</label>
            <input
              type="text"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleInputChange}
              required
            />
          </div>
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
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
