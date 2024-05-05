import React, { useState } from 'react';
import './ServiceForm.css';
import axios from 'axios'; // Import axios for making HTTP requests
import upload_img from '../../../assets/upload_img.png';


const AddService = () => {
  const [image,setImage] = useState(false);
    const [service, setService] = useState({
      serviceTitle: '',
      estimatedHour: '',
        details: '',
    }); 

    const imageHandler = (e) =>{
      setImage(e.target.files[0]);
  }

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
        <div>
            <div className="f-container">
                <form onSubmit={handleSubmit}>
                  <div className='img-container'>
                  <div className='addproduct-item'>
              <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image):upload_img} className='addproduct-thumbnail' alt="Upload Thumbnail" />
              </label>
              <input onChange={imageHandler} type='file' name='image' id='file-input' hidden={true} />
            </div>  
                    </div>
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
                 
                    <button className="buttons" type='submit'>Add Service</button>
                </form>
            </div>
        </div>
    )
}

export default AddService;
