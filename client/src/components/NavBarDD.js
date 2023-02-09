import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from './Context/UserContext'
import { Link, NavLink } from 'react-router-dom'
import { LogoutUser } from './Stores/Fetches'
import propic from '../images/propic.jpg'
import { useHistory } from 'react-router-dom'

// TO DO: set global state for closing the drop down so itll close when you click buttons after leaving it open

function NavBarDD() {
    const [open, setOpen] = useState(false)
    const [imageURL, setImageURL] = useState('')
    const { user, setUser } = useContext(UserContext);
    const history = useHistory()

    function handleLogoutClick() {
        LogoutUser(user).then(userData => {
            history.push("/")
            setUser(null)
            localStorage.removeItem("userID")
        })
      }

    // set profile picture to a default image if none is available in user data 
    useEffect(() => {  
        if (user.image_url !== null) {
            setImageURL(user.image_url)
        } else {
            setImageURL(propic)
        }
    },[])

    return (
    <>
        <img className="proPic" 
            src={imageURL} 
            alt="Profile of the user" 
            onClick={()=>setOpen(!open)}>
        </img>
        { open ? (
            <div className="dropdown">
                <Link to={`/users/${user.id}/profile`} onClick={()=>setOpen(!open)}>
                    <div className="menu-item">
                        <i class="gg-profile"></i>
                        Profile
                    </div>
                </Link>
             
                { user.host ? ( 
                        <li className="nav-link">
                            <div className="menu-item">
                                <NavLink to={`/hosts/${user.id}/campgrounds`}>
                                    My Campgrounds
                                </NavLink>
                            </div>
                        </li>
                        ) : ( 
                        <li className="nav-link">
                            <NavLink to={`/campers/${user.id}/reservations`}>
                                <div className="menu-item">
                                    <i class="gg-calendar-today"></i>
                                    My Reservations
                                </div>
                            </NavLink>
                        </li>
                         )
                        }
                <div className="menu-item">
                    <button className="logout" onClick={handleLogoutClick}>Logout</button>
                </div>
            </div>
        ) : null}
    </>
    )
}

export default NavBarDD;