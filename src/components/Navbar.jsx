import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    // Navbar component 
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
      {/* Link to the home page */}
      <Link className="navbar-brand" to="/">Account Manager</Link>
    </nav>
  );
}

export default Navbar;
