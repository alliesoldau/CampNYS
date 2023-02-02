import React, { useState, useContext } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import Landing from '../../styles/Landing';
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
                <h1>Please Login or Sign Up</h1>
                <div>
                  <button className="login" onClick={handleRevealLogin}>Login</button>
                  <button className="signup" onClick={handleRevealSignUp}>Signup</button>
                  { showLogin===true ? 
                  <Login />
                  : null }
                  { showSignUp===true ?
                  <SignUp />
                  : null}
                </div>
            </Landing>
        )
      }
}

export default LandingPage;

