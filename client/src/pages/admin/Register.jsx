import React from "react";
import "./Register.css"; 

const Register = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="register-card">

        <img src="logo.png" className="img-fluid d-block mx-auto" width="120" alt="Logo" />

        <h3 className="login-title">Register</h3>

        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter your password" />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-control" placeholder="Confirm your password" />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <input type="checkbox" className="form-check-input" id="remember" />
              <label htmlFor="remember" className="form-check-label">Remember me</label>
            </div>

            <button type="submit" className="btn btn-primary">Register</button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default Register;
