import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from './components/Context/UserContext'
import { CampgroundProvider } from './components/Context/CampgroundContext'
import { CamperReservationsProvider } from './components/Context/CamperReservationsContext'
import './index.css';


ReactDOM.render(  
    <Router>
        <UserProvider>
            <CampgroundProvider>
                <CamperReservationsProvider>
                    <App />
                </CamperReservationsProvider>
            </CampgroundProvider>
        </UserProvider>
    </Router>,
  document.getElementById('root')
);

