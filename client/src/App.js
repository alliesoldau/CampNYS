import React from 'react';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import LandingPage from './components/Shared/LandingPage'
import { UserProvider } from './components/Context/UserContext'

function App() {


  return (
    <UserProvider>
      <div className="app-container">
        <h1>CampNYS</h1>
        <NavBar />
          <div className="body-container">
            <Switch>

              <Route exact path='/'>
                <LandingPage />
              </Route>


            </Switch>
          </div>
      </div>
    </UserProvider>
  );
}

export default App;