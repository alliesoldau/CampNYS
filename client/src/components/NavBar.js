import React from "react";
import {Link, NavLink} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

function NavBar() {

    // const history = useHistory()

    // function handleLogoutClick() {
    //     fetch("/logout", { method: "DELETE" }).then((r) => {
    //       if (r.ok) {
    //         history.push("/")
    //         setUser(null);
    //       }
    //     });
    //   }

    return (   
        <>
            <p>NavBar</p>
            <Link exact to="/">
                <h1> LandingPage </h1>
            </Link>
                {/* {user ? ( */}
                <div>
                    {/* <NavLink className="NavLink-Button" to={`/users/${user.id}/profile`}>
                        Profile
                    </NavLink>
                    <NavLink className="NavLink-Button" to={`/users/${user.id}/baby_showers`}>
                        My Showers
                    </NavLink>
                    <NavLink className="NavLink-Button" to={`/users/${user.id}/gifts`}>
                        Things I'm Gifting
                    </NavLink>
                    <NavLink className="NavLink-Button" to={`/users/search`}>
                        Search for Friends
                    </NavLink>
                    <button className="logout">Logout</button>
                </div>                    
                {/* ) : ( */}
                {/* <div className="Nav-Bar-All-Links">
                    <Link to="/users/new">Sign Up</Link>
    <Link to="/login">Login</Link> */}
                </div>
                {/* )} */}
        </>
    ) 
}

export default NavBar;