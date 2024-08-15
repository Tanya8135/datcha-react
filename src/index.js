import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
// import './Sass/index.scss'
import App from './components/App/App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/datcha-react'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)