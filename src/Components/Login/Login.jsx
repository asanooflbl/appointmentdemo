import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (email === 'staff@clinic.com' && password === '123456') {
      navigate('/calendar');
    } else {
      setError('Wrong email or password');
    }
  };
  return (

    <div className='login-main'>
         <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        {error && <p className="login-error">{error}</p>}
      </form>
    </div>
  )
}

export default Login