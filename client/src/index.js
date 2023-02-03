import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from './components/Context/UserContext'

import './index.css';


ReactDOM.render(  
    <Router>
        <UserProvider>
          <App />
        </UserProvider>
    </Router>,
  document.getElementById('root')
);

