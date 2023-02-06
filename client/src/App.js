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
import { AutoLogin, GrabAllCampgrounds, GrabCamperReservations } from './components/Stores/Fetches'
import { UserContext } from './components/Context/UserContext'
import { CampgroundContext } from './components/Context/CampgroundContext'
import { CamperReservationsContext } from './components/Context/CamperReservationsContext'
import { ReservationDetailsProvider } from './components/Context/ReservationDetailsContext'
import { HostCampgroundsProvider } from './components/Context/HostCampgroundsContext'
import { CampgroundDetailsProvider } from './components/Context/CampgroundDetailsContext'
import { SiteProvider } from './components/Context/SiteContext'


function App() {

  const { setUser } = useContext(UserContext)
  const { setCampgrounds } = useContext(CampgroundContext)
  const { setCampRes } = useContext(CamperReservationsContext)

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
        console.log('host')
    } else {
        console.log('camper')
        GrabCamperReservations(user.id).then((d) => {
            setCampRes(d)
        })
      } 
    }

  return (
    // <CampgroundProvider >
      <div className="app-container">
        <NavBar />
        {/* <CamperReservationsProvider> */}
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

              {/* <CamperReservationsProvider> */}
                <ReservationDetailsProvider>

                <Route path='/campers/:id/reservations'>
                    <CamperReservations />
                </Route>

                <Route path='/reservation/:id/edit'>
                  <EditCamperRes />
                </Route>

                </ReservationDetailsProvider>
              {/* </CamperReservationsProvider> */}


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
          {/* </CamperReservationsProvider> */}
      </div>
    // </CampgroundProvider>
  );
}

export default App;