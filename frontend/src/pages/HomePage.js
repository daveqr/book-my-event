import React, { useState } from 'react';
import Events from '../components/content/Events'
import ShortcutsContent from '../components/content/ShortcutsContent'
import '../App.css';
import '../style.css'

function HomePage() {
  const [activeMenuItem, setActiveMenuItem] = useState('events');

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  const renderContent = () => {
    switch (activeMenuItem) {
      case 'events':
        return <Events />;
      case 'shortcuts':
        return <ShortcutsContent />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <div className="d-flex" id="wrapper">
        {/* Sidebar*/}
        <div className="border-end bg-white" id="sidebar-wrapper">
          <div className="sidebar-heading border-bottom bg-light">Event Booking Demo</div>
          <div className="list-group list-group-flush">
            <a
              className={`list-group-item list-group-item-action list-group-item-light p-3 ${activeMenuItem === 'events' ? 'active' : ''
                }`}
              href="#!"
              onClick={() => handleMenuItemClick('events')}
            >
              Events
            </a>
            <a
              className={`list-group-item list-group-item-action list-group-item-light p-3 ${activeMenuItem === 'shortcuts' ? 'active' : ''
                }`}
              href="#!"
              onClick={() => handleMenuItemClick('shortcuts')}
            >
              Shortcuts
            </a>
          </div>
        </div>

        {/* Page content wrapper*/}
        <div id="page-content-wrapper">

          {/* Top navigation*/}
          <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div className="container-fluid">

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                  <li className="nav-item active"><a className="nav-link" href="#!">Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="#!">Events</a></li>
                  <li className="nav-item"><a className="nav-link" href="#!">Login</a></li>
                </ul>
              </div>
            </div>
          </nav>

          {renderContent()}a

        </div>

      </div>

      {/* Bootstrap core JS*/}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}

export default HomePage;
