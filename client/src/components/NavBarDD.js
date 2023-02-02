import React, { useState, useContext } from 'react';
import { UserContext } from './Context/UserContext'
import { Link } from 'react-router-dom'
import { LogoutUser } from './Stores/Fetches'
import { useHistory } from 'react-router-dom'

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
        onClick={()=>setOpen(!open)}></img>
        { open ? (
            <div className="dropdown">
                <div className="menu-item">
                    <Link to={`/users/${user.id}/profile`} onClick={()=>setOpen(!open)}>
                        Profile
                    </Link>
                </div>
                <div className="menu-item">
                    <button onClick={handleLogoutClick}>Logout</button>
                </div>
            </div>
        ) : null}
    </a>
    )
}

export default NavBarDD;