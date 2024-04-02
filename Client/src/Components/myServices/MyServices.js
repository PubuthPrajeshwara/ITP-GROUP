import React from 'react'
import './MyServices.css'
import Services from '../../assets/myServices/MyServicesData'
import { Link, useLocation } from "react-router-dom";

function MyServices() {
  return (
    <div>
       <section2>
      <div className='container2'>
        <div className='cards2'>
        {Services.map((service) => (
            <div key={service}  className='card2'>
                <img className="img2" src={service.Image} alt="" />
                <h2>{service.Name}</h2>
                <p>{service.About}</p>
                <p>{service.Duration}</p>
                <p>Price: $20</p>
                <button className='btn2'>Book Now</button>
            </div>
        ))}
        </div>
      </div>
      </section2>
    </div>
  )
}

export default MyServices
