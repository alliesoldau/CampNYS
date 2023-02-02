import React, { useState, useContext } from 'react';
import { UserContext } from './Context/UserContext'
import { Link, NavLink } from 'react-router-dom'
import { LogoutUser } from './Stores/Fetches'
import { useHistory } from 'react-router-dom'

// TO DO: set global state for closing the drop down so itll close when you click buttons after leaving it open

function NavBarDD() {
    const [open, setOpen] = useState(false)
    const { user, setUser } = useContext(UserContext);
    const history = useHistory()

    function handleLogoutClick() {
        LogoutUser(user).then(user => {
            history.push("/")
            setUser(null)
        })
      }
    return (
    <a>
        <img className="proPic" 
            src={user.image_url} 
            alt="Profile picture of the user" 
            onClick={()=>setOpen(!open)}>
        </img>
        { open ? (
            <div className="dropdown">
                <div className="menu-item">
                    <Link to={`/users/${user.id}/profile`} onClick={()=>setOpen(!open)}>
                        Profile
                    </Link>
                </div>
                { user.host ? ( 
                        <div className="menu-item">
                            <li className="nav-item">
                                <NavLink to={`/hosts/${user.id}/reservations`}>
                                    My Campgrounds
                                </NavLink>
                            </li>
                        </div>
                        ) : ( 
                        <li className="nav-link">
                            <div className="menu-item">
                                <NavLink to={`/campers/${user.id}/reservations`}>
                                    My Reservations
                                </NavLink>
                            </div>
                        </li>
                         )
                        }
                <div className="menu-item">
                    <button onClick={handleLogoutClick}>Logout</button>
                </div>
            </div>
        ) : null}
    </a>
    )
}

export default NavBarDD;