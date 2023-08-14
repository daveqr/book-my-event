import React, { useState, useEffect } from 'react';

function Events() {
  const [events, setEvents] = useState([]);

  const formatDateTime = (dateTime) => {
    return new Date(dateTime).toLocaleString(undefined, {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  useEffect(() => {
    fetch('http://localhost:3001/events')
      .then(response => response.json())
      .then(data => {
        setEvents(data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);

  return (
    <div>
      {events ? (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.name}</td>
                <td>{formatDateTime(event.date)}</td>
                <td>{event.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading events...</p>
      )}
    </div>
  );
}

export default Events;
