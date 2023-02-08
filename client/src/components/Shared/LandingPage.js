import React, { useContext } from 'react';
import Login from './Login'
import SignUp from './SignUp'
import Landing from '../../styles/Landing'
import LoginSignup from '../../styles/LoginSignup'
import { UserContext } from '../Context/UserContext'

function LandingPage({ showLogin, showSignUp}) {

    const { user } = useContext(UserContext);

    if (user) {
        return (
          <Landing>
            <div className="Home-Page">
              <h1><i>Welcome, {user.first_name} {user.last_name}!</i></h1>
            </div>
          </Landing>
        )
      } else {
        return (
            <Landing>
                <LoginSignup>
                  <div className="form-container">
                      { showLogin===true ? 
                        <div className="form">
                          <Login />
                        </div>
                      : null }
                      { showSignUp===true ?
                        <div className="form">
                          <SignUp />
                        </div>
                      : null}
                  </div>
                </LoginSignup>
            </Landing>
        )
      }
}

export default LandingPage;

