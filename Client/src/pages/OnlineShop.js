import React from 'react'
import './OnlineShop.css'
import Popular from '../Components/popular/popular'
import Banner from '../assets/slider3.jpg'

const OnlineShop = () => {
  return (
    <div>
        <img className='banner' src={Banner} alt="logo" />
        <Popular/>
    </div>
  )
}

export default OnlineShop;