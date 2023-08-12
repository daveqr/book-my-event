import React, { useState } from 'react';

function EventsSidebar() {
    const [activeSidebarItem, setActiveSidebarItem] = useState('events');

    const handleMenuItemClick = (menuItem) => {
        setActiveSidebarItem(menuItem);
    };

  return (
    <div className="list-group list-group-flush">
    <a
        className={`list-group-item list-group-item-action list-group-item-light p-3 ${activeSidebarItem === 'events' ? 'active' : ''
            }`}
        href="#!"
        onClick={() => handleMenuItemClick('events')}
    >
        Events
    </a>
    <a
        className={`list-group-item list-group-item-action list-group-item-light p-3 ${activeSidebarItem === 'shortcuts' ? 'active' : ''
            }`}
        href="#!"
        onClick={() => handleMenuItemClick('shortcuts')}
    >
        Shortcuts
    </a>
</div>
  );
}

export default EventsSidebar;
