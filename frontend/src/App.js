import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';

function App() {
  const storedUser = JSON.parse(localStorage.getItem('user'));

  return (
    <main>
        <RouterProvider router={router} />
    </main>
  );
}

export default App;