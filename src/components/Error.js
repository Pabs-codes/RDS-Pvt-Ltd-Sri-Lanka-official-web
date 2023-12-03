import React from 'react';

const Error = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    animation: 'fadeIn 2s ease-in-out', // Apply the animation directly in the style
  };

  const headingStyle = {
    fontSize: '2rem',
    color: '#333', // Adjust the color as needed
    marginBottom: '10px',
  };

  const messageStyle = {
    fontSize: '1rem',
    color: '#555', // Adjust the color as needed
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Website is under construction</h1>
      <p style={messageStyle}>Check back later for updates.</p>
    </div>
  );
};

export default Error;
