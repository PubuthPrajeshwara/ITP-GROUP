import React from 'react'
import './item.css'

const item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt="" />
        <div className='details'>
            <p>{props.name}</p>
            <div className='item-price-new'>
                Rs.{props.new_price}
            </div>
            <div className='item-price-old'>
                Rs.{props.old_price}
            </div>
        </div>
        
    </div>
  )
}

export default item;
