import React, { useContext } from 'react';
import { UserContext } from './Context/UserContext'
import { Link, NavLink } from 'react-router-dom'
import NavBarStyles from '../styles/NavBarStyles'
import logo from '../images/logo.png'
import NavBarDD from './NavBarDD'

function NavBar() {

    const { user } = useContext(UserContext);

    return (
        <NavBarStyles>
            <div className="navbarLeft">
                    <Link exact to="/">
                        <div className="logo-full">
                            <img className="logo" src={logo} 
                            alt="CampNYS Logo of a tree and mountain that look like a tent"></img>
                            <h1>CampNYS</h1>
                        </div>
                    </Link>
            </div>
                {user ? (
                    <ul className="navbarRight">
                        { user.host ? ( 
                            null
                        ) : ( 
                            <div className="links">
                                <NavLink to={`/search_campgrounds`}>
                                    Search Campgrounds
                                </NavLink>
                            </div>
                         )
                        }
                        <li>
                            <NavBarDD />
                        </li>
                    </ul>
                ) : ( null
             )}

        </NavBarStyles>

    )
}

export default NavBar;