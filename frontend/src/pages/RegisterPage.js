import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from '../AuthProvider'; 

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [registrationSuccess, setRegistrationSuccess] = useState('');

  const queryClient = useQueryClient();
  // const { user, isAuthenticated, login, logout, setUser } = useAuth();

  const navigate = useNavigate()

  const registerMutation = useMutation(async (userData) => {
    const response = await fetch('http://localhost:3001/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('user');
      // TODO need to get the user    
      // setUser(userData);
      navigate('/register-success'); 
    },
  });

  const handleRegister = () => {
    const userData = {
      user: {
        name: name,
        email: email,
        password: password,
      },
    };

    registerMutation.mutate(userData);
  };

  return (
    <div>
        <h2>Create an Account</h2>
        <form onSubmit={handleRegister}> 
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="button" onClick={handleRegister}>Registerx</button>
        </form>
    </div>
  );
}

export default RegisterPage;
