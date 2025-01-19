import React from 'react';
import '../styles/Login.css';

const Login = () => {
  const handleDiscordLogin = () => {
    const CLIENT_ID = '924666357050654790';
    const REDIRECT_URI = 'http://localhost:5173/success';
    const DISCORD_AUTH_URL = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=identify%20email`;
    
    window.location.href = DISCORD_AUTH_URL;
  };

  return (
    <div className="login-container">
      <h1>Welcome</h1>
      <button className="discord-button" onClick={handleDiscordLogin}>
        Login with Discord
      </button>
    </div>
  );
};

export default Login;
