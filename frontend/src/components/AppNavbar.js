import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AppNavbar() {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const isAuthenticated = storedUser !== null;
  const [activeMenuItem, setActiveMenuItem] = useState('activeMainMenuItem');


  const handleMenuItemClick = (menuItem) => {
      setActiveMenuItem(menuItem);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item active"><Link className="nav-link" to="/" onClick={() => handleMenuItemClick('')}>Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/events" onClick={() => handleMenuItemClick('')}>Events</Link></li>
            <li className="nav-item">
              {isAuthenticated ? (
                <span className="nav-link">{storedUser ? storedUser.name : 'User'}</span>
              ) : (
                <Link className="nav-link" to="/login" onClick={() => handleMenuItemClick('')}>Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AppNavbar;




{/* <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
<div className="container-fluid">

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item active"><Link to="/" className="nav-link" onClick={() => handleMenuItemClick('')}>Home</Link></li>
            <li className="nav-item active"><Link to="/events" className="nav-link" onClick={() => handleMenuItemClick('events')}>Events</Link></li>
            <li className="nav-item active"><Link to="/login" className="nav-link" onClick={() => handleMenuItemClick('login')}>Login</Link></li>
        </ul>
    </div>
</div>
</nav> */}