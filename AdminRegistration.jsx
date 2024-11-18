import React, { useState } from 'react'
import "./admin.css"
const AdminRegistration = () => {

  const [isSignIn, setIsSignIn] = useState(false);

  const toggleForm = () => {
    setIsSignIn((prev) => !prev);
  };
  return (
    <div className="auth-container">
    <div className={`auth-card ${isSignIn ? "rotate" : ""}`}>
      <div className="auth-face signup-face">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account?{" "}
          <span className="link" onClick={toggleForm}>
            Sign In
          </span>
        </p>
      </div>

      <div className="auth-face signin-face">
        <h2>Sign In</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign In</button>
        </form>
        <p>
          Don’t have an account?{" "}
          <span className="link" onClick={toggleForm}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  </div>
  )
}

export default AdminRegistration