import React from 'react';
import './ServicePopUp.css';

function SpopUp({closePop}) {
    return (
        <div className='popupContainer' onClick={(e) => {
            if(e.target.className === 'popupContainer') closePop()
        }}>
            <div className="popup">
                <div className="popup-inner">
                    <h1>Service Details</h1>
                    <div className="serviceDetails">
                        <div className="serviceDetails-left">
                            <p>Service Name:</p>
                            <p>Service Description:</p>
                            <p>Service Price:</p>
                        </div>
                        <div className="serviceDetails-right">
                            <p>Service Name</p>
                            <p>Service Description</p>
                            <p>Service Price</p>
                        </div>
                    </div>
                    <button className="closePopup">Close</button>
                </div>
            </div>
        </div>
    )
}

export default SpopUp;
