import React, { useContext } from 'react';
import { UserContext } from './Context/UserContext'
import { Link, NavLink } from 'react-router-dom'
import NavBarStyles from '../styles/NavBarStyles'
import logo from '../images/logo.png'
import NavBarDD from './NavBarDD'

function NavBar({ setShowLogin, setShowSignUp}) {

    const { user } = useContext(UserContext);

    function handleRevealLogin() {
      setShowLogin(true)
      setShowSignUp(false)
    }

    function handleRevealSignUp() {
      setShowSignUp(true)
      setShowLogin(false)
    }

    function handleHideForms() {
        setShowLogin(false)
        setShowSignUp(false)
    }

    return (
        <NavBarStyles>
            <div className="navbarLeft">
                { user ? 
                    <Link to={`/users/${user.id}`}>
                        <div className="logo-full" onClick={handleHideForms}>
                            <img className="logo" src={logo} 
                            alt="CampNYS Logo of a tree and mountain that look like a tent"></img>
                            <h1>CampNYS</h1>
                        </div>
                    </Link>
                : 
                    <Link exact to="/">
                        <div className="logo-full" onClick={handleHideForms}>
                            <img className="logo" src={logo} 
                            alt="CampNYS Logo of a tree and mountain that look like a tent"></img>
                            <h1>CampNYS</h1>
                        </div>
                    </Link>
                    }
            </div>
            { user ? null :
            <ul className="navbarRight">
                    <h4>Please 
                        <button id="login" className="LP" onClick={handleRevealLogin}>Login</button> 
                            or 
                        <button id="signup" className="LP" onClick={handleRevealSignUp}>Signup</button>
                    </h4>
            </ul> }
                {user ? (
                    <ul className="navbarRight">
                        { user.host ? ( 
                            null
                        ) : ( 
                        <NavLink to={`/search_campgrounds`}>
                            <div className="links">
                                <i class="gg-search"/>
                                Search Campgrounds
                            </div>
                        </NavLink>
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