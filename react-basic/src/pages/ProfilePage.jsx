import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({ username: '', password: '' });

  useEffect(() => {
    const username = Cookies.get('username');
    const password = Cookies.get('password');
    setProfileData({ username: username || 'Not set', password: password || 'Not set' });
  }, []);

  return (
    <div className="container mt-5">
      <h2>Profile Page</h2>
      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">User Information</h5>
          <p className="card-text"><strong>Username:</strong> {profileData.username}</p>
          <p className="card-text"><strong>Password:</strong> {profileData.password}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
