import React, { useContext } from 'react';
import Login from './Login';
import { UserContext } from '../Context/UserContext'

function LandingPage() {

    const { user } = useContext(UserContext);

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
                <Login />
            </div>
        )
      }
}

export default LandingPage;

