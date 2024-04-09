import{useState} from 'react'
import React from 'react'
import Modal from '../../components/BookingComp/popUpform/Modal'
import RequestTable from '../../components/BookingComp/BRequestTable/RequestTable'
import './Bookings.css'
import BNavBar from '../../components/BookingComp//BookingNavBar/BNavBar'


function BookingRequest() {
  const[modalOpen,setModalOpen]=useState(false)
  return (
    <div className='wrapContent'>
      <BNavBar/>
      <RequestTable openModal={()=>{setModalOpen(true)}}/>
      {modalOpen && <Modal closeModal={()=>{setModalOpen(false)}}
     />}
     
    </div>
  )
}

export default BookingRequest
