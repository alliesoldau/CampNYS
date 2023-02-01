import React from 'react';
import Login from './Login';

function LandingPage() {
    return (
        <>
            <p>LandingPage</p>
        {/* if (user) { */}
        {/* return ( */}
            {/* <div>
                <h1><i>Welcome, {user.username}</i></h1>
            </div> */}
        {/* ) */}
        {/* } else { */}
        {/* return ( */}
            <div>
                <h1>Please Login or Sign Up</h1>
                <Login />
            </div>
        {/* )
      }
  } */}
        </>
    )
}

export default LandingPage;