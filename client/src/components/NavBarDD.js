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

    useEffect(() => {  
        if (user.image_url !== null) {
            setImageURL(user.image_url)
        } else {
            setImageURL(propic)
        }
      console.log(user.image_url)

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
                    <button className="logout" onClick={handleLogoutClick}>Logout</button>
                </div>
            </div>
        ) : null}
    </>
    )
}

export default NavBarDD;