import React, { useEffect, useContext } from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import LandingPage from './components/Shared/LandingPage'
import HomePage from './components/Shared/HomePage'
import UserProfile from './components/Shared/UserProfile'
import SearchPage from './components/CamperComponents/Search/SearchPage'
import CamperReservations from './components/CamperComponents/CamperReservations/CamperReservations'
import { AutoLogin } from './components/Stores/Fetches'
import { UserContext } from './components/Context/UserContext'
import { CampgroundProvider } from './components/Context/CampgroundContext'
import { CamperReservationsProvider } from './components/Context/CamperReservationsContext'



function App() {

  const { setUser } = useContext(UserContext);

  useEffect(() => {
    // auto-login
    if (localStorage.userID) {
      AutoLogin().then(setUser)
    // TO DO: add a catch 
    }
  }, []);

  return (
    <CampgroundProvider >
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

              <Route path='/users/:id/profile'>
                <UserProfile />
              </Route>

              <Route path='/users/:id'>
                <HomePage />
              </Route>

              <Route path='/campers/:id/reservations'>
                <CamperReservationsProvider>
                  <CamperReservations />
                </CamperReservationsProvider>
              </Route>

            </Switch>
          </div>
      </div>
    </CampgroundProvider>
  );
}

export default App;