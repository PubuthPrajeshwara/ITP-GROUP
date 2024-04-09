import React from 'react'
import './Service.css'
import ServiceTable from '../../components/serviceComp/ServiceTable/ServiceTable'
import NavBar from '../../components/serviceComp/NavBar/NavBar'

const Service = () => {
  return ( 
    <div className='wrapContent'>
    <NavBar/>
    <div className='left-right'>
  
     <ServiceTable/>
     </div>
    </div>

  )
}

export default Service