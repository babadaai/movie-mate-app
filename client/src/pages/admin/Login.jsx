import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { setToken } from "../../utils/storage";
import { Notify } from "../../component/Notify"; // optional, for nicer notifications
import { instance } from "../../utils/axios";

const Login = () => {
  const navigate = useNavigate();

  const [payload, setPayload] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState(""); // success message
  const [error, setError] = useState(""); // error message

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await instance.post("/users/login", payload);
      const { data: token, msg } = data;

      setMsg(msg); // show success message
      setToken("access_token", token); // store token in localStorage

      // Navigate to admin dashboard after successful login
      navigate("/admin");
      console.log("Login success:", data);
    } catch (err) {
      const errMsg =
        err?.response?.data?.msg ||
        "Something went wrong. Please check credentials or try again!";
      setError(errMsg);

      console.error("Login error:", err);

      // Handle email verification case
      if (errMsg.includes("Email needs to be verified")) {
        navigate("/verify-email", { state: { email: payload.email } });
      }
    } finally {
      // Clear messages after 3 seconds
      setTimeout(() => {
        setError("");
        setMsg("");
      }, 3000);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Login</h2>

        {msg && <div className="success-msg">{msg}</div>}
        {error && <div className="error-msg">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={payload.email}
              onChange={(e) =>
                setPayload((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={payload.password}
              onChange={(e) =>
                setPayload((prev) => ({ ...prev, password: e.target.value }))
              }
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

