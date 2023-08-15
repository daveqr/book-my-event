import { Outlet } from "react-router-dom";
import React, { useState } from 'react';
import EventsSidebar from './EventsSidebar';
import AppNavbar from '../components/AppNavbar';
import '../App.css';
import '../style.css'

function Layout() {

    const [activeMenuItem, setActiveMenuItem] = useState('');

    return (
        <div className="App">
            <div className="d-flex" id="wrapper">

                {/* Sidebar*/}
                <div className="border-end bg-white" id="sidebar-wrapper">
                    <div className="sidebar-heading border-bottom bg-light">Event Booking Demo</div>
                    {activeMenuItem === 'events' && <EventsSidebar />}
                </div>

                {/* Page content wrapper*/}
                <div id="page-content-wrapper">

                    {/* Top navigation*/}
                    <AppNavbar activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />

                    <Outlet />
                </div>

            </div>

            {/* Bootstrap core JS */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    );
}

export default Layout;