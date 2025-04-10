// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional global styles
import App from './App'; // Import the main app component

ReactDOM.render(
  <React.StrictMode>
    <App />  {/* This renders the App component */}
  </React.StrictMode>,
  document.getElementById('root') // React attaches the app to the DOM element with id 'root'
);