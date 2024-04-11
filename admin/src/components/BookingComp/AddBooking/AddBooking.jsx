import React from 'react'
import BNavBar from '../BookingNavBar/BNavBar'
import './AddBooking.css'
import BookingForm from '../BookingForm/BookingForm'

function AddBooking() {
  return (
    <div className='wrapContent'>
      <BNavBar/>
      <BookingForm/>
    </div>
  )
}

export default AddBooking
