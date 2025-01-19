import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');

      if (code) {
        try {
          // Note: You'll need to set up a backend server to handle this properly
          // This is just for demonstration
          const response = await axios.get('https://discord.com/api/users/@me', {
            headers: {
              Authorization: `Bearer ${code}`,
            },
          });
          setUserData(response.data);
        } catch (err) {
          setError('Failed to fetch user data');
          console.error('Error fetching user data:', err);
        }
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    setUserData(null);
    // Clear any stored tokens or session data
    localStorage.removeItem('discord_token');
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      {userData ? (
        <div>
          <p>Welcome, {userData.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
