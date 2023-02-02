import React, { useState, useContext } from 'react';
import Login from './Login';
import SignUp from './SignUp';
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
          <div className="Home-Page">
            <h1><i>Welcome, {user.first_name} {user.last_name}!</i></h1>
          </div>
        )
      } else {
        return (
            <div>
                <h1>Please Login or Sign Up</h1>
                <button onClick={handleRevealLogin}>Login</button>
                <button onClick={handleRevealSignUp}>Signup</button>
                { showLogin===true ? 
                <Login />
                : null }
                { showSignUp===true ?
                <SignUp />
                : null}
            </div>
        )
      }
}

export default LandingPage;

