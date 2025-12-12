import React from 'react';
import "./ForgetPass.css";

const ForgetPass = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="login-card">

        <img
          src="logo.png"
          className="img-fluid d-block mx-auto"
          width="120"
          alt="Logo"
        />

        <h3 className="login-title">Enter your email</h3>

        <form>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Get code
          </button>
        </form>

      </div>
    </div>
  );
};

export default ForgetPass;
