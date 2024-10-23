import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Account() {
  
  // State to store the user's email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // useEffect runs when the component is mounted to load the user data
  useEffect(() => {

    // Retrieve the stored user information from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    // If user information is found, set email and password state
    if (storedUser) {
      setEmail(storedUser.email);
      setPassword(storedUser.password);
    } else {
      
      // If no user information is found, navigate to the login page
      navigate('/login');
    }
  }, [navigate]); // Dependency array includes navigate to ensure the effect runs when navigate changes

  // Function to handle updating the user's account information
  const handleUpdate = () => {
    // Create an object with the updated email and password
    const updatedUser = { email, password };
    
    // Save the updated user information back to localStorage
    localStorage.setItem('user', JSON.stringify(updatedUser));
    
    // Display an alert message indicating the account was updated successfully
    alert('Account updated successfully');
  };

  // Function to handle logging out
  const handleLogout = () => {
    // Navigate the user to the login page
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Account Information</h2>

          {/* Form field for updating the email */}
          <div className="form-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          {/* Form field for updating the password */}
          <div className="form-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>

          {/* Button to update the account information */}
          <button className="btn btn-primary w-100 mb-3" onClick={handleUpdate}>
            Update
          </button>

          {/* Button to log out */}
          <button className="btn btn-dark w-100" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;
