import React, { useContext } from 'react';
import { UserContext } from './Context/UserContext'
import { LogoutUser } from './Stores/Fetches'
import { Link, NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import logo from '../images/logo.png'

function NavBar() {

    const { user, setUser } = useContext(UserContext);

    const history = useHistory()

    function handleLogoutClick() {

        LogoutUser(user).then(user => {
            history.push("/")
            setUser(null)
        })
      }

    return (  
    // conditionally render NavBar for if a user is logged in, a camper, or a host  
        <>
            <Link exact to="/">
                <img className="logo" src={logo}></img>
            </Link>
            <div>
                {user ? (
                    <div className="Nav-Bar-All-Links">
                        { user.host ? ( 
                            <div>
                                <NavLink to={`/hosts/${user.id}/reservations`}>
                                    My Campgrounds
                                </NavLink>
                            </div>
                        ) : ( 
                            <div>
                                <NavLink to={`/campers/${user.id}/reservations`}>
                                    My Reservations
                                </NavLink>
                                <NavLink to={`/search_campgrounds`}>
                                    Search Campgrounds
                                </NavLink>
                                <NavLink to={`/users/${user.id}/profile`}>
                                    Profile
                                </NavLink>
                            </div>
                         )
                        }
                        <NavLink to={`/users/${user.id}/profile`}>
                            Profile
                        </NavLink>
                        <button onClick={handleLogoutClick}>Logout</button>
                    </div>                    
                    ) : ( null )
                }
            </div>
        </>
    ) 
}

export default NavBar;