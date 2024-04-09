import React from 'react'
import './Admin.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Routes,Route } from 'react-router'
import Dashboard from '../Dashboard/Dashboard'
import Home from '../Home/Home'
import Users from '../Users/Users'
import Service from '../Service/Service'
import Bookings from '../Booking/bookings'
import Issue from '../Issue/Issue'
import Inventory from '../Inventory/Inventory'
import Supplier from '../Supplier/Supplier'
import Employee from '../Employee/Employee'
import Payment from '../Payment/Payment'
import OnlineShop from '../OnlineShop/OnlineShop'
import Customer from '../Customer/Customer'
import Orders from '../../components/onlineShop/Orders/Orders'
import Alerts from '../../components/onlineShop/Alerts/Alerts'
import AddProduct from '../../components/onlineShop/AddProduct/AddProduct'
import UpdateProduct from '../../components/onlineShop/UpdateProduct/UpdateProduct'
import AddService from '../../components/serviceComp/AddService/AddService'


const Admin = () => {
  return (
    <div className='Admin'>
      <Sidebar/>
      <Routes>
      <Route path='/' element={<Dashboard/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/booking' element={<Bookings/>}/>
            <Route path='/issue' element={<Issue/>}/>
            <Route path='/inventory' element={<Inventory/>}/>
            <Route path='/supplier' element={<Supplier/>}/>
            <Route path='/employee' element={<Employee/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/onlineshop' element={<OnlineShop/>}/>
            <Route path='/customer' element={<Customer/>}/>
            <Route path='/Onlineshop/orders' element={<Orders/>}/>
            <Route path='/Onlineshop/Alerts' element={<Alerts/>}/>
            <Route path='/Onlineshop/products/addproduct' element={<AddProduct/>}/>
            <Route path='/service/add' element={<AddService/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route exact path="/Onlineshop/products/updateproduct/:id" element={<UpdateProduct />} />


      </Routes>
    </div>
  )
}

export default Admin