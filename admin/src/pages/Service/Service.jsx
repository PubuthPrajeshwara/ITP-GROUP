import React from 'react'
import './Service.css'
import ServiceTable from '../../components/serviceComp/ServiceTable/ServiceTable'
import NavBar from '../../components/serviceComp/NavBar/NavBar'
import ServicePopUp from '../../components/serviceComp/servicePopUp/ServicePopUp'
import { useState } from 'react'

const Service = () => {
  const [popUpOpen, setPopUpOpen] = useState(false)
  return ( 
    <div className='wrapContent'>
    <NavBar/>
    <div className='left-right'>
  
     <ServiceTable openPop={()=>{setPopUpOpen(true)}}/>
     {popUpOpen && <ServicePopUp closePop={()=>{setPopUpOpen(false)}}/>}
     </div>
    </div>

  )
}

export default Service