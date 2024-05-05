import React from 'react'
import './Admin.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router'
import Dashboard from '../Dashboard/Dashboard'
import Home from '../Home/Home'
import Users from '../Users/Users'
import Service from '../Service/Service'
import Bookings from '../Booking/bookings'
import Issue from '../Issue/Issue'
// import Inventory from '../Inventory/Inventory'
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
import AddBooking from '../../components/BookingComp/AddBooking/AddBooking'
import AllBooking from '../../components/BookingComp/AllBookings/AllBooking'
import CreateIssue from '../../components/IssueComp/CreateIssues';
import ShowIssue from '../../components/IssueComp/ShowIssue';
import EditIssue from '../../components/IssueComp/EditIssue';
import DeleteIssue from '../../components/IssueComp/DeleteIssue';
// import InsertInventory from '../../components/InventoryComp/InsertInventory';
// import UpdateInventory from '../../components/InventoryComp/UpdateInventory';
// import Inventory from '../../components/InventoryComp/Inventory';
 

const Admin = () => {
  return (
    <div className='Admin'>
      <Sidebar />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/home' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/service' element={<Service />} />
        <Route path='/booking' element={<Bookings />} />
        <Route path='/issue' element={<Issue />} />
        {/* <Route path='/inventory' element={<Inventory />} /> */}
        <Route path='/supplier' element={<Supplier />} />
        <Route path='/employee' element={<Employee />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/onlineshop' element={<OnlineShop />} />
        <Route path='/customer' element={<Customer />} />
        <Route path='/Onlineshop/orders' element={<Orders />} />
        <Route path='/Onlineshop/Alerts' element={<Alerts />} />
        <Route path='/Onlineshop/products/addproduct' element={<AddProduct />} />
        <Route path='/service/add' element={<AddService />} />
        <Route path='/service' element={<Service />} />
        <Route exact path="/Onlineshop/products/updateproduct/:id" element={<UpdateProduct />} />
        <Route path='/booking/add' element={<AddBooking />} />
        <Route path='/booking/all' element={<AllBooking />} />
        <Route path='/issues/create' element={<CreateIssue />} />
        <Route path='/issues/details/:id' element={<ShowIssue />} />
        <Route path='/issues/edit/:id' element={<EditIssue />} />
        <Route path='/issues/delete/:id' element={<DeleteIssue />} />
        {/* <Route path="/inventory" element={<Inventory />} />
        <Route path="/insertinventory" element={<InsertInventory />} />
        <Route path="/updateinventory/:id" element={<UpdateInventory />} /> */}
       

      </Routes>
    </div>
  );
}

export default Admin;
