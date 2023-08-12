import React, { useState } from 'react';
import Events from '../components/content/Events'
import ShortcutsContent from '../components/content/ShortcutsContent'
import '../App.css';
import '../style.css'

function EventsPage() {
  const [activeMenuItem] = useState('events');

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

    <div>
      {renderContent()}
    </div>

  );
}

export default EventsPage;
