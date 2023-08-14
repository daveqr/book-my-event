import React from 'react';
import { useAuth } from '../AuthContextProvider';

function RegisterSuccess() {
  const { user } = useAuth();

  return (
    <div>
      Register Successful
      {user && <p>Welcome, {user.name}!</p>}
    </div>
  );
}

export default RegisterSuccess;
