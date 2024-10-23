import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';
import Navbar from './components/Navbar';

function App() {
  
  return (
    // Router component to enable client-side routing
    <Router>
      <div className="App">
        {/* Navbar component for navigation links */}
        <Navbar />
        <div className="container">
          {/* Define application routes */}
          <Routes>
            {/* Redirect from root URL to login page */}
            <Route path='/' element={<Navigate to='/login' />} />
            {/* Route for the login page */}
            <Route path="/login" element={<Login />} />
            {/* Route for the registration page */}
            <Route path="/register" element={<Register />} />
            {/* Route for the account page */}
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
