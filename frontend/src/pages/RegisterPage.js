import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from '../AuthContextProvider'; 

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useAuth();
  
  const queryClient = useQueryClient();
  
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

    const responseData = await response.json();
    return responseData.data;
  }, {
    onSuccess: (data) => {
      console.log('User registered:', data);
      const { id, email, name } = data;
      setUser({ id, email, name });
      
      queryClient.invalidateQueries('user');
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
          <button type="button" onClick={handleRegister}>Register</button>
        </form>
    </div>
  );
}

export default RegisterPage;
