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
                <h2>Please 
                  <button className="login" onClick={handleRevealLogin}>Login</button> 
                  or 
                  <button className="signup" onClick={handleRevealSignUp}>Signup</button>
                </h2>
                  <LoginSignup>
                    <div className="form-container">
                      <div className="form">
                        { showLogin===true ? 
                          <Login />
                        : null }
                        { showSignUp===true ?
                        <SignUp />
                        : null}
                      </div>
                    </div>
                  </LoginSignup>
            </Landing>
        )
      }
}

export default LandingPage;

