import React, { useState } from 'react';
import './ServicePopUp.css';
import axios from 'axios'; // Import axios for making HTTP requests
import React from 'react';
import './ServicePopUP.css';

const AddService = ({closePop}) => {
    const [service, setService] = useState({
      serviceTitle: '',
      estimatedHour: '',
        details: '',
    }); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setService({ ...service, [name]: value });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          // Send form data to backend server
          await axios.post("http://localhost:4000/addservice", service);
          alert("Booking submitted successfully!");
          // Optionally, reset the form after submission
          setService({
            serviceTitle: "",
            estimatedHour: "",
            details: "",
          });
        } catch (error) {
          console.error("Error submitting Service:", error);
          alert("An error occurred while Adding the Service.");
        }
      };
    return (
        <div className='popupContainer' onClick={(e) => {
            if(e.target.className === 'popupContainer') closePop()
        }}>
            
            <div className="p-container">
                <form onSubmit={handleSubmit}>
                  <div className='img-container'>
                    <img src="car-service.jpg" alt="Car Service" className=""/>
                    </div>
                    <button className="import-button">Import</button>

                    <label className='lab'>Service Title:</label>
                    <input 
                        type="text" 
                        name="serviceTitle"
                        required
                        value={service.serviceTitle}
                        onChange={handleChange}
                    />

                    <label className='lab'>Estimated Hour:</label>
                    <input 
                        type="text" 
                        name="estimatedHour"
                        required
                        value={service.estimatedHour}
                        onChange={handleChange}
                    />

                    <label className='lab'>Special Notes:</label>
                    <textarea
                        name="details"
                        placeholder="Any special notes or instructions?"
                        value={service.details}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <div className='btn-container'>
                    <button className="buttons" type='submit'>Update</button>
                    <button className="buttons" type='submit'>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddService;
