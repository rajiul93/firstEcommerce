import React from 'react';
import ReactDOM from 'react-dom/client';
import "swiper/css/bundle";
import App from './App';
import Provider from './context/UserContext';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
