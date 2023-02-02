import React, { useEffect, useContext } from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBarTest from './components/NavBar'
import LandingPage from './components/Shared/LandingPage'
import HomePage from './components/Shared/HomePage'
import UserProfile from './components/Shared/UserProfile'
import SearchPage from './components/CamperComponents/Search/SearchPage'
import CamperReservations from './components/CamperComponents/CamperReservations/CamperReservations'
import HostCampgrounds from './components/HostComponents/HostCampgrounds'
// import { UserProvider } from './components/Context/UserContext'
import { UserContext } from './components/Context/UserContext'

function App() {

  const { setUser } = useContext(UserContext);

  useEffect(() => {
    // auto-login
    if (localStorage.userID) {
      fetch(`http://localhost:3000/authorized/${localStorage.userID}`).then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        } else {
          console.log("rip")
        }
      });
    }
  }, []);

  return (
    // <UserProvider>
      <div className="app-container">
        <NavBarTest />
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
    // </UserProvider>
  );
}

export default App;