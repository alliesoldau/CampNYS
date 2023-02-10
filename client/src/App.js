import React, { useEffect, useContext, useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import LandingPage from './components/Shared/LandingPage'
import HomePage from './components/Shared/HomePage'
import UserProfile from './components/Shared/UserProfile'
import EditProfile from './components/Shared/EditProfile'
import SearchPage from './components/CamperComponents/Search/SearchPage'
import CamperReservations from './components/CamperComponents/CamperReservations/CamperReservations'
import EditCamperRes from './components/CamperComponents/CamperReservations/EditCamperRes'
import MakeRes from './components/CamperComponents/Search/MakeRes'
import HostCampgrounds from './components/HostComponents/HostCampgrounds'
import CampgroundDetails from './components/HostComponents/CampgroundDetails'
import EditCampground from './components/HostComponents/EditCampground'
import AddCampground from './components/HostComponents/AddCampground'
import SitesSummary from './components/HostComponents/SitesSummary'
import EditSite from './components/HostComponents/EditSite'
import AddSite from './components/HostComponents/AddSite'
import { AutoLogin, GrabAllCampgrounds, GrabCamperReservations, GrabHostCampgrounds } from './components/Stores/Fetches'
import { UserContext } from './components/Context/UserContext'
import { CampgroundContext } from './components/Context/CampgroundContext'
import { CamperReservationsContext } from './components/Context/CamperReservationsContext'
import { ReservationDetailsProvider } from './components/Context/ReservationDetailsContext'
import { CampgroundDetailsProvider } from './components/Context/CampgroundDetailsContext'

import { SiteProvider } from './components/Context/SiteContext'

// BIG TO DO: only do one fetch and nest data in the user so i dont need mutliple fetches 
// BIG TO DO: think of an easier way to import all components from one place so its not a shit show here 

function App() {

  const { user, setUser } = useContext(UserContext)
  const { setCampgrounds } = useContext(CampgroundContext)
  const { setCampRes } = useContext(CamperReservationsContext)

  const [showLogin, setShowLogin] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)

  useEffect(() => {
    // auto-login 
    if (localStorage.userID) {
      AutoLogin().then((user) => {
        setUser(user)
        UserTypeDependentFxn(user)
      })
      GrabAllCampgrounds().then(setCampgrounds)
    // TO DO: add a catch 
    }
  }, []);

  function UserTypeDependentFxn(user) {
    if (user.host===false) {
        // console.log('camper')
        GrabCamperReservations(user.id).then((d) => {
            setCampRes(d)
        })
      } 
    }

  return (
      <div className="app-container">
        <NavBar setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} />
          <div className="body-container">
            <Switch>

              <Route exact path='/'>
                <LandingPage showLogin={showLogin} showSignUp={showSignUp}/>
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

              { user && !user.host ? 
              <ReservationDetailsProvider>

                <Route exact path='/campers/:id/reservations'>
                  <CamperReservations />
                </Route>

                <Route path='/reservation/:id/edit'>
                  <EditCamperRes />
                </Route>

                <Route path='/add_reservation/:id'>
                  <MakeRes />
                </Route>

              </ReservationDetailsProvider>
              :  
                <CampgroundDetailsProvider>
                  <SiteProvider>
                    <Route exact path='/hosts/:id/campgrounds'>
                        <HostCampgrounds/>
                    </Route>

                    <Route path='/host/campground/:id'>
                        <CampgroundDetails />
                    </Route>

                    <Route path='/campground/:id/edit'>
                        <EditCampground />
                    </Route>

                    <Route path='/host/:id/add_campground'>
                        <AddCampground />
                    </Route>

                    <Route path='/campground/:id/sites'>
                        <SitesSummary />
                    </Route>
                    
                    <Route exact path='/campgrounds/:CGID/site/:siteID/edit'>
                        <EditSite />
                    </Route>

                    <Route exact path='/campground/:id/add_sites'>
                        <AddSite />
                    </Route>
                  </SiteProvider>
                </CampgroundDetailsProvider>
              }
            </Switch>
          </div>
      </div>
  );
}

export default App;