import React, { useState } from "react";
import "./Login.css";
import { setToken } from "../../utils/storage";
import { Notify } from "../../component/Notify";
// Make sure you have axios instance imported
import instance from "../../utils/axios"; 

const Login = () => {
  const [payload, setPayload] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState({});
  const [Error, setError] = useState({});

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await instance.post("/users/login", payload);
      const { data: token, msg } = data;
      setMsg(msg);
      setToken("access_token", token);

      console.log({ data });
    } catch (err) {
      setError(JSON.stringify(err));
      console.error(err);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <img src="logo.png" className="img-fluid" width="120" alt="Logo" />

        <h3 className="login-title">Welcome Back</h3>

        <form onSubmit={handleLogin}>
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
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              onChange={(e) =>
                setPayload((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>

          <a href="/forgot-password" className="forgot-link">
            Forgot Password?
          </a>

          <div className="d-flex justify-content-between align-items-center mb-3 mt-2">
            <div>
              <input type="checkbox" className="form-check-input" id="remember" />
              <label htmlFor="remember" className="form-check-label">
                Remember me
              </label>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>

          <a href="/register" className="Register">
            Register
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
