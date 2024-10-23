import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  
  // State to store the email and password input by the user
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Function to handle user registration when the form is submitted
  const handleRegister = (e) => {
    e.preventDefault(); 

    // Create a user object with the entered email and password
    const user = { email, password };

    // Store the user information in localStorage
    localStorage.setItem('user', JSON.stringify(user));

    // Display a success message upon registration
    alert('Registration successful');

    // Navigate the user to the login page after successful registration
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Register</h2>

          {/* Registration form with onSubmit handler */}
          <form onSubmit={handleRegister}>

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

            {/* Submit button for registration */}
            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </form>
          
          {/* Link to the login page for users who already have an account */}
          <p className="text-center mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
