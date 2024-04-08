import React from 'react';
import './ManageService.css';

function AddService({ selectedService }) {
    return (
        <div>
            <div className="f-container">
                <form>
                  <div className='img-container'>
                    <img src="car-service.jpg" alt="Car Service" className="s-image"/>
                    </div>
                    <button className="import-button">Import</button>

                    <label>Service Title:</label>
                    <input type="text" placeholder={selectedService ? selectedService.title : ''}/>

                    <label>Estimated Hour:</label>
                    <input type="text" placeholder={selectedService ? selectedService.hour : ''}/>

                    <label>Details:</label>
                    <textarea placeholder={selectedService ? selectedService.description : ''}></textarea>

                    <div className="buttons">
                        <button>Update</button>
                        <button>Delete</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddService;
