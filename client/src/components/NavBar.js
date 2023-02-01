import React, { useContext } from 'react';
import { UserContext } from './Context/UserContext'
import { LogoutUser } from './Stores/Fetches'
import {Link, NavLink} from 'react-router-dom'
import {useHistory} from 'react-router-dom'

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
        <>
            <Link exact to="/">
                <h1> CampNYS </h1>
            </Link>
            <div>
                {user ? (
                    <div className="Nav-Bar-All-Links">
                        <NavLink to={`/campers/${user.id}/reservations`}>
                            My Reservations
                        </NavLink>
                        <NavLink to={`/search_campgrounds`}>
                            Search Campgrounds
                        </NavLink>
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