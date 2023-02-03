import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from './components/Context/UserContext'

import './index.css';

// QUESTION: why can't i put my campground provider here also?? 

ReactDOM.render(  
    <Router>
        <UserProvider>
            <App />
        </UserProvider>
    </Router>,
  document.getElementById('root')
);

