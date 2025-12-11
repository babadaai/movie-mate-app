import React from 'react'

const ErrorPage = () => {
  return (
    <div> <div class="error-container">
    <h1 class="error-code">404</h1>
    <h2 class="error-message">Oops! Page Not Found</h2>
    <p class="error-description">
      The page you’re looking for doesn’t exist or has been moved.
    </p>
    <a href="index.html" class="btn">Back to Home</a>
  </div>
</div>
  )
}

export default ErrorPage