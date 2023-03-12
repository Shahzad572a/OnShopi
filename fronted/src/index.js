import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import store from './store';
import './bootstrap.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./i18n";

// import axios from 'axios';

// axios.defaults.headers.common['Accept-Language'] =localStorage.getItem('lang') || 'en';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <App />
</Provider>,
 
);

 
reportWebVitals();
