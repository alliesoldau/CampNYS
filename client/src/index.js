import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from './components/Context/UserContext'
import { CampgroundProvider } from './components/Context/CampgroundContext'
import { HostCampgroundsProvider } from './components/Context/HostCampgroundsContext'
import { CamperReservationsProvider } from './components/Context/CamperReservationsContext'

import './index.css';

// QUESTION: why can't i put my campground provider here also?? 

ReactDOM.render(  
    <Router>
        <UserProvider>
            <CampgroundProvider>
                <CamperReservationsProvider>
                    <HostCampgroundsProvider>
                        <App />
                    </HostCampgroundsProvider>
                </CamperReservationsProvider>
            </CampgroundProvider>
        </UserProvider>
    </Router>,
  document.getElementById('root')
);

