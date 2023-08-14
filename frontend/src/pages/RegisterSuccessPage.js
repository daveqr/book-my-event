import React from 'react';

function RegisterSuccess() {
  const storedUser = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      Register Successful
      {storedUser && <p>Welcome, {storedUser.name}!</p>}
    </div>
  );
}

export default RegisterSuccess;
