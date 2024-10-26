import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // Import the main App component
import './index.css'     // Optional: for global styles

// Render the App component inside the 'root' element in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
