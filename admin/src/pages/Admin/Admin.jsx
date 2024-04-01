import React from 'react'
import './Admin.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Routes,Route } from 'react-router'
import Dashboard from './pages/Dashboard/Dashboard'
import Home from './pages/Home/Home'
import Users from './pages/Users/Users'
import Service from './pages/Service/Service'
import Issue from './pages/Issue/Issue'
import Inventory from './pages/Inventory/Inventory'
import Supplier from './pages/Supplier/Supplier'
import Employee from './pages/Employee/Employee'
import Payment from './pages/Payment/Payment'
import OnlineShop from './pages/OnlineShop/OnlineShop'
import Customer from './pages/Customer/Customer'

const Admin = () => {
  return (
    <div className='Admin'>
      <Sidebar/>
      <Routes>
      <Route path='/' element={<Dashboard/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/issue' element={<Issue/>}/>
            <Route path='/inventory' element={<Inventory/>}/>
            <Route path='/supplier' element={<Supplier/>}/>
            <Route path='/employee' element={<Employee/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/onlineshop' element={<OnlineShop/>}/>
            <Route path='/customer' element={<Customer/>}/>

      </Routes>
    </div>
  )
}

export default Admin