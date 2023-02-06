import React, { useEffect, useContext } from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import LandingPage from './components/Shared/LandingPage'
import HomePage from './components/Shared/HomePage'
import UserProfile from './components/Shared/UserProfile'
import EditProfile from './components/Shared/EditProfile'
import SearchPage from './components/CamperComponents/Search/SearchPage'
import CamperReservations from './components/CamperComponents/CamperReservations/CamperReservations'
import HostCampgrounds from './components/HostComponents/HostCampgrounds'
import CampgroundDetails from './components/HostComponents/CampgroundDetails'
import EditCampground from './components/HostComponents/EditCampground'
import SitesSummary from './components/HostComponents/SitesSummary'
import SiteDetails from './components/HostComponents/SiteDetails'
import { AutoLogin } from './components/Stores/Fetches'
import { UserContext } from './components/Context/UserContext'
import { CampgroundProvider } from './components/Context/CampgroundContext'
import { CamperReservationsProvider } from './components/Context/CamperReservationsContext'
import { HostCampgroundsProvider } from './components/Context/HostCampgroundsContext'
import { CampgroundDetailsProvider } from './components/Context/CampgroundDetailsContext'
import { SiteProvider } from './components/Context/SiteContext'



function App() {

  const { setUser } = useContext(UserContext);

  useEffect(() => {
    // auto-login
    if (localStorage.userID) {
      AutoLogin().then(setUser)
      // TO DO: figure out how to put the campground provider in index.js so that i can 
      // setCampgrounds on autologin as well so that you can refresh and still have that data 
      // GrabAllCampgrounds().then(setCampgrounds)
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

              <Route path='/users/:id/profile/edit'>
                <EditProfile />
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

              <HostCampgroundsProvider>
                <CampgroundDetailsProvider>
                  <SiteProvider>
                    <Route path='/hosts/:id/campgrounds'>
                        <HostCampgrounds/>
                    </Route>

                    <Route path='/host/campground/:id'>
                        <CampgroundDetails />
                    </Route>

                    <Route path='/campground/:id/edit'>
                        <EditCampground />
                    </Route>

                    <Route path='/campground/:id/sites'>
                      <SitesSummary />
                    </Route>

                    <Route path='/site/:id'>
                      <SiteDetails />
                    </Route>

                  </SiteProvider>
                </CampgroundDetailsProvider>
              </HostCampgroundsProvider>

            </Switch>
          </div>
      </div>
    </CampgroundProvider>
  );
}

export default App;