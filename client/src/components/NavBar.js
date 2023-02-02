import React, { useContext } from 'react';
import { UserContext } from './Context/UserContext'
import { LogoutUser } from './Stores/Fetches'
import { Link, NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import NavBarStyles from '../styles/NavBarStyles'
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
        <NavBarStyles>
            <div className="full-nav">
            <Link exact to="/">
                <img className="logo" src={logo} alt="CampNYS Logo of a tree and mountain that look like a tent"></img>
            </Link>
                {user ? (
                    <div className="all-links">
                        { user.host ? ( 
                            <div>
                                <NavLink to={`/hosts/${user.id}/reservations`}>
                                    My Campgrounds
                                </NavLink>
                            </div>
                        ) : ( 
                            <div className="links">
                                <NavLink to={`/campers/${user.id}/reservations`}>
                                    My Reservations
                                </NavLink>
                                <NavLink to={`/search_campgrounds`}>
                                    Search Campgrounds
                                </NavLink>
                            </div>
                         )
                        }
                        <div className="links">
                            <NavLink to={`/users/${user.id}/profile`}>
                                <img className="proPic" src={user.image_url} alt="Profile picture of the user"></img>
                            </NavLink>
                            <button onClick={handleLogoutClick}>Logout</button>
                        </div>
                    </div>                    
                    ) : ( null )
                }
                </div>
            </NavBarStyles>
    ) 
}

export default NavBar;