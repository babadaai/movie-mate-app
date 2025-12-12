import React from "react";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>
      <h2 className="error-message">Oops! Page Not Found</h2>
      <p className="error-description">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <a href="/" className="btn">Back to Home</a>
    </div>
  );
};

export default ErrorPage;