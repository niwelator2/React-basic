import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const CookiePage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  
  const handleCookieSubmit = (e) => {
    e.preventDefault();
    Cookies.set('username', username);
    Cookies.set('password', password);
    console.log('Cookies Set:', { username, password });
    navigate('/profile');
  };

  return (
    <div className="container mt-5">
      <h2 className="mt-5">Cookies</h2>
      <form onSubmit={handleCookieSubmit}>
        <div className="mb-3">
          <label htmlFor="cookieUsername" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="cookieUsername"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cookiePassword" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="cookiePassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-secondary">Submit with Cookies</button>
      </form>
    </div>
  );
};

export default CookiePage;
