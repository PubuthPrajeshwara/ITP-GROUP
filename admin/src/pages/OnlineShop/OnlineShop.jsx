import React from 'react'
import Navbar from '../../components/onlineShop/Navbar/Navbar'
import ProductOptions from '../../components/onlineShop/productOptions/ProductOptions'
import ProductList from '../../components/onlineShop/ProductList/ProductList'

const OnlineShop = () => {
  return (
    <div>
      <Navbar/>
      <ProductOptions/>
      <ProductList/>
    </div>
  )
}

export default OnlineShop