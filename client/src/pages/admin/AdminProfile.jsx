import React from "react";
import "./AdminProfile.css";

const AdminProfile = () => {
  return (
    <>
      <img
        src="logo.png"
        className="img-fluid d-block mx-auto"
        width="120"
        alt="Logo"
      />

      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li>Home</li>
          <li>Movies</li>
          <li>Orders</li>
          <li>Users</li>
          <li className="active">Profile</li>
        </ul>
      </aside>

      <div className="main-content">
        <div className="profile-container">

          <div className="tab-nav">
            <button>Profile</button>
            <button className="active">Change Password</button>
            <button>Contacts</button>
          </div>

          <form>
            <div className="mb-3">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                className="form-control"
                defaultValue="admin@moviemate.com"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="token">Token</label>
              <input
                type="text"
                id="token"
                className="form-control"
              />
              <div className="note">Token is sent to email</div>
            </div>

            <div className="mb-3">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                id="newPassword"
                className="form-control"
              />
            </div>

            <div className="text-center mt-4">
              <button type="submit" className="btn btn-primary">
                Reset Password
              </button>
            </div>
          </form>

        </div>
      </div>
    </>
  );
};

export default AdminProfile;
