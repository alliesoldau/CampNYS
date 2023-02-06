import React, { useEffect, useContext } from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import LandingPage from './components/Shared/LandingPage'
import HomePage from './components/Shared/HomePage'
import UserProfile from './components/Shared/UserProfile'
import EditProfile from './components/Shared/EditProfile'
import SearchPage from './components/CamperComponents/Search/SearchPage'
import CamperReservations from './components/CamperComponents/CamperReservations/CamperReservations'
import EditCamperRes from './components/CamperComponents/CamperReservations/EditCamperRes'
import HostCampgrounds from './components/HostComponents/HostCampgrounds'
import CampgroundDetails from './components/HostComponents/CampgroundDetails'
import EditCampground from './components/HostComponents/EditCampground'
import SitesSummary from './components/HostComponents/SitesSummary'
import SiteDetails from './components/HostComponents/SiteDetails'
import EditSite from './components/HostComponents/EditSite'
import { AutoLogin, GrabAllCampgrounds, GrabCamperReservations, GrabHostCampgrounds } from './components/Stores/Fetches'
import { UserContext } from './components/Context/UserContext'
import { CampgroundContext } from './components/Context/CampgroundContext'
import { CamperReservationsContext } from './components/Context/CamperReservationsContext'
import { ReservationDetailsProvider } from './components/Context/ReservationDetailsContext'
import { CampgroundDetailsProvider } from './components/Context/CampgroundDetailsContext'
import { HostCampgroundsContext } from './components/Context/HostCampgroundsContext'

import { SiteProvider } from './components/Context/SiteContext'

// BIG TO DO: only do one fetch and nest data in the user so i dont need mutliple fetches 
// BIG TO DO: think of an easier way to import all components from one place so its not a shit show here 

function App() {

  const { user, setUser } = useContext(UserContext)
  const { setCampgrounds } = useContext(CampgroundContext)
  const { setCampRes } = useContext(CamperReservationsContext)
  const { setHostCampgrounds} = useContext(HostCampgroundsContext)


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
    if (user.host===true) {
        // console.log('host')
        GrabHostCampgrounds(user.id).then((d)=> {
          // console.log(d)
          setHostCampgrounds(d)
        })
    } else {
        // console.log('camper')
        GrabCamperReservations(user.id).then((d) => {
            setCampRes(d)
        })
      } 
    }

  return (
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

              { user && !user.host ? 
              <ReservationDetailsProvider>

                <Route exact path='/campers/:id/reservations'>
                  <CamperReservations />
                </Route>

                <Route path='/reservation/:id/edit'>
                  <EditCamperRes />
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

                    <Route path='/campground/:id/sites'>
                      <SitesSummary />
                    </Route>
                    
                    <Route exact path='/site/:id/edit'>
                      <EditSite />
                    </Route>

                    <Route exact path='/site/:id'>
                      <SiteDetails />
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