import React from 'react'
import './popular.css'
import pop_products from '../../assets/products/pop_products'
import  Item  from '../item/item'

export const popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR PRODUCTS</h1>
        <hr/>
        <div className='popular-item'>
            {pop_products.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
        
    </div>
  )
}

export default popular;