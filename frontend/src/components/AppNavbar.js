import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

function AppNavbar({ activeMenuItem, setActiveMenuItem }) {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const isAuthenticated = storedUser !== null;
  const navigate = useNavigate();

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login'); 
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className={`nav-item ${activeMenuItem === '' ? 'active' : ''}`}>
              <Link className="nav-link" to="/" onClick={() => handleMenuItemClick('')}>Home</Link>
            </li>
            <li className={`nav-item ${activeMenuItem === 'events' ? 'active' : ''}`}>
              <Link className="nav-link" to="/events" onClick={() => handleMenuItemClick('events')}>Events</Link>
            </li>
            <li className="nav-item">
              {isAuthenticated ? (
                <button className="nav-link" onClick={handleLogout}>Logout</button>
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
