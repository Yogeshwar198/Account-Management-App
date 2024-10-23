import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  
  // State to store the email and password input by the user
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Function to handle login when the form is submitted
  const handleLogin = (e) => {
    e.preventDefault(); 

    // Retrieve the stored user information from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Check if the email and password match the stored user information
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      // Navigate to the account page if login is successful
      navigate('/account');
    } else {
      
      alert('Invalid email or password');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Login</h2>

          {/* Login form with onSubmit handler */}
          <form onSubmit={handleLogin}>

            {/* Email input field */}
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required
              />
            </div>

            {/* Password input field */}
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                required
              />
            </div>

            {/* Submit button for login */}
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>

          {/* Link to the registration page for new users */}
          <p className="text-center mt-3">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
