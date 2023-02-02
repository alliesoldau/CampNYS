import React from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import LandingPage from './components/Shared/LandingPage'
import HomePage from './components/Shared/HomePage'
import UserProfile from './components/Shared/UserProfile'
import SearchPage from './components/CamperComponents/Search/SearchPage'
import CamperReservations from './components/CamperComponents/CamperReservations/CamperReservations'
import HostCampgrounds from './components/HostComponents/HostCampgrounds'
import { UserProvider } from './components/Context/UserContext'

function App() {

  return (
    <UserProvider>
      <div className="app-container">
        <NavBar />
          <div className="body-container">
            <Switch>

              <Route exact path='/'>
                <LandingPage />
              </Route>

              <Route path='/search_campgrounds'>
                <SearchPage />
              </Route>

              <Route path='/campers/:id/reservations'>
                <CamperReservations />
              </Route>

              <Route path='/hosts/:id/reservations'>
                <HostCampgrounds />
              </Route>

              <Route path='/users/:id/profile'>
                <UserProfile />
              </Route>

              <Route path='/users/:id'>
                <HomePage />
              </Route>

            </Switch>
          </div>
      </div>
    </UserProvider>
  );
}

export default App;