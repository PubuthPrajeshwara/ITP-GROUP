import React from 'react'
import logo from '../../assets/newlogo.png';
import man from '../../assets/man.png';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

import './Header.css'

function Header() {
  return (
    <div className='Header'>
        <div className='leftHeader'>
        <img className='logo' src={logo} alt="logo" />
            <h1 className='pd'>P&D</h1>
            <h1 className="auto">Auto Engineers</h1>
        </div>
        <div className='rightHeader'>
          <div className='cart'>
          <Link to='/cart'><ShoppingCartOutlinedIcon style={{ color: 'white' }} fontSize="large"/></Link>
          <div className='cart-count'>
            0
          </div>
          </div>
          <h3 className='Hey'>Hey,</h3>
          <h3 className='name'>User</h3>
          <img className='man' src={man} alt="man" />
        </div>
    </div>
  )
}

export default Header