import React from 'react'
import './login.css'

const loginSignup = () => {
  return (
    <div className='loginSignup'>
        <div className='loginSignup-container'>
            <h1>Sign Up</h1>
            <div className='loginSignup-field'>
                <input type="text" placeholder='Your Name' />
                <input type='email' placeholder='Email Address'/>
                <input type='password' placeholder='Password'/>
            </div>
            <div className='loginSignup-agree'>
              <input type='checkbox' name='' id=''/>
              <p>By clicking continue, I agree to the terms &  conditions</p>
            </div>
            <button>continue</button>
            <p className='loginSignup-login'>Already have an account?<span>Login Here</span></p>
        </div>
        
    </div>
  )
}

export default loginSignup