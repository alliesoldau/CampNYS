import React, { useState, useContext } from 'react';
import Login from './Login'
import SignUp from './SignUp'
import Landing from '../../styles/Landing'
import LoginSignup from '../../styles/LoginSignup'
import { UserContext } from '../Context/UserContext'

function LandingPage() {

    const { user } = useContext(UserContext);
    
    const [showLogin, setShowLogin] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false)

    function handleRevealLogin() {
      setShowLogin(true)
      setShowSignUp(false)
    }

    function handleRevealSignUp() {
      setShowSignUp(true)
      setShowLogin(false)
    }

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
                <h4>Please 
                  <button className="login" onClick={handleRevealLogin}><i>Login</i></button> 
                  or 
                  <button className="signup" onClick={handleRevealSignUp}><i>Signup</i></button>
                </h4>
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

