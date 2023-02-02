import React, { useState, useContext } from 'react';
import { UserContext } from './Context/UserContext'
import { Link, NavLink } from 'react-router-dom'
import { LogoutUser } from './Stores/Fetches'
import NavBarStyles from '../styles/NavBarStyles'
import logo from '../images/logo.png'
import NavBarDD from './NavBarDD'

function NavBarTest() {

    const { user } = useContext(UserContext);

    return (
        <NavBarStyles>
            <ul className="navbar">
                <li className="nav-item">
                    <Link exact to="/">
                        <img className="logo" src={logo} 
                        alt="CampNYS Logo of a tree and mountain that look like a tent"
                        ></img>
                    </Link>
                </li>
            </ul>
                {user ? (
                    <ul className="navbar">
                        <li className="nav-item">
                            <NavBarDD />
                        </li>
                        { user.host ? ( 
                            <li className="nav-item">                                <NavLink to={`/hosts/${user.id}/reservations`}>
                                    My Campgrounds
                                </NavLink>
                            </li>
                        ) : ( 
                            <div className="links">
                                <li className="nav-link">
                                    <NavLink to={`/campers/${user.id}/reservations`}>
                                        My Reservations
                                    </NavLink>
                                </li>
                                <li className="nav-link">
                                    <NavLink to={`/search_campgrounds`}>
                                        Search Campgrounds
                                    </NavLink>
                                </li>
                            </div>
                         )
                        }
                    </ul>
                ) : ( null
             )}

        </NavBarStyles>

    )
}

export default NavBarTest;