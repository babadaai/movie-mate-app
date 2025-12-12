import React from "react";
import { useState, useEffect } from "react";
import "./Login.css";
import {Link} from "react-router-dom"


const Login = () => {
  const [payload,setPayload]=useState({
    email:"",
    password:"",
  })
  const handleLogin=async(e)=>{
    try{
    e.preventDefault();
    const {data} = await instance.post("/users/login")
    console.log({data})
    
    console.log({payload})
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div className="login-wrapper d-flex justify-content-center align-items-center vh-100">
      <div className="login-card">

        <img src="logo.png" className="img-fluid d-block mx-auto" width="120" alt="Logo" />

        <h3 className="login-title">Welcome Back</h3>

        <form onSubmit={(e)=>handleLogin(e)}>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
           <input
    type="email"
    className="form-control"
    placeholder="Enter your email"
    onChange={(e) =>
      setPayload((prev) => ({ ...prev, email: e.target.value }))
  }
/>

          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password"
             className="form-control"
              placeholder="Enter your password"  
              onChange={(e) =>
                       setPayload((prev) => 
                                ({ ...prev, password: e.target.value }))
  } />
          </div>

          <a href="/forgot-password" className="forgot-link">Forgot Password?</a>

          <div className="d-flex justify-content-between align-items-center mb-3 mt-2">
            <div>
              <input type="checkbox" className="form-check-input" id="remember" />
              <label htmlFor="remember" className="form-check-label">Remember me</label>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
          <div>

            <a href="/register" className="Register">Register</a>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Login;
