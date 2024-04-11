import React from 'react'
import BNavBar from '../BookingNavBar/BNavBar'
import RequestTable from '../BRequestTable/RequestTable'
import './AllBooking.css'

function AllBooking() {
  return (
         <div className='wrapContent'>
         <BNavBar/>
         <RequestTable />    
    </div>

  )
}

export default AllBooking
