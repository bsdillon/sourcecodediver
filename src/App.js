// src/App.js
import React from 'react';
import './App.css'; // Import any global CSS styles if you have
import logo from './assets/scd_logo_thumb.png'; // Import the logo if you placed it in src/assets

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="SourceCodeDiver Logo" />
        <h1>Welcome to SourceCodeDiver</h1>
        <p>We are working on automating code reviews with interactive UML diagrams!</p>
      </header>
    </div>
  );
}

export default App;