import React, { useState } from 'react';
import './login.css';

const LoginSignup = () => {
  const [state, setState] = useState("Sign Up");
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    let responseData;
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      responseData = await response.json();
    } catch (error) {
      console.error('Error during login:', error);
      return;
    }

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const signup = async () => {
    let responseData;
    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      responseData = await response.json();
    } catch (error) {
      console.error('Error during signup:', error);
      return;
    }

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className='loginSignup'>
      <div className='loginSignup-container'>
        <h1>{state}</h1>
        <div className='loginSignup-field'>
          {state === "Sign Up" ? <input className='textby' type="text" name="name" value={formData.name} onChange={changeHandler} placeholder='Your Name' /> : <></>}
          <input className='textby' type='email' name="email" value={formData.email} onChange={changeHandler} placeholder='Email Address' />
          <input className='textby' type='password' name="password" value={formData.password} onChange={changeHandler} placeholder='Password' />
        </div>
        <div className='loginSignup-agree'>
          <>
            <input className='checkbox' type='checkbox' name='' id='' />
            <p>By clicking continue, I agree to the terms & conditions</p>
          </>
        </div>
        <button onClick={() => { state === "Log In" ? login() : signup() }}>continue</button>
        {state === "Sign Up"
          ? <p className='loginSignup-login'>Already have an account?<span onClick={() => { setState("Log In") }}>Login Here</span></p>
          : <p className='loginSignup-login'>Create an account?<span onClick={() => { setState("Sign Up") }}>Click Here</span></p>}
      </div>
    </div>
  );
};

export default LoginSignup;
