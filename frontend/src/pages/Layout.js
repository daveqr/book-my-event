import { Outlet } from "react-router-dom";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EventsSidebar from './EventsSidebar';

import '../App.css';
import '../style.css'

function Layout() {

    const [activeMainMenuItem, setActiveMainMenuItem] = useState('activeMainMenuItem');


    const handleMainMenuItemClick = (menuItem) => {
        setActiveMainMenuItem(menuItem);
    };

    return (
        <div className="App">
            <div className="d-flex" id="wrapper">
                
                {/* Sidebar*/}
                <div className="border-end bg-white" id="sidebar-wrapper">
                    <div className="sidebar-heading border-bottom bg-light">Event Booking Demo</div>                    

                    {activeMainMenuItem === 'events' && <EventsSidebar />}

                </div>

                {/* Page content wrapper*/}
                <div id="page-content-wrapper">

                    {/* Top navigation*/}
                    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                        <div className="container-fluid">

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                    <li className="nav-item active"><Link to="/" className="nav-link" onClick={() => handleMainMenuItemClick('')}>Home</Link></li>
                                    <li className="nav-item active"><Link to="/events" className="nav-link" onClick={() => handleMainMenuItemClick('events')}>Events</Link></li>
                                    <li className="nav-item active"><Link to="/login" className="nav-link" onClick={() => handleMainMenuItemClick('login')}>Login</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <Outlet />

                </div>

            </div>

            {/* Bootstrap core JS */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    );
}


export default Layout;