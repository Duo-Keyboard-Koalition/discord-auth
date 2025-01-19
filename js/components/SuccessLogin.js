import React from 'react';
import '../styles/Login.css';

const SuccessLogin = () => {
  return (
    <div className="login-container">
      <h1>Successfully Logged In!</h1>
      <p>You have successfully authenticated with Discord.</p>
      <a href="/dashboard" className="discord-button">
        Go to Dashboard
      </a>
    </div>
  );
};

export default SuccessLogin;
