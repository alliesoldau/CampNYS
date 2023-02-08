import React, { useContext } from 'react';
import { UserContext } from './Context/UserContext'
import { Link, NavLink } from 'react-router-dom'
import NavBarStyles from '../styles/NavBarStyles'
import logo from '../images/logo.png'
import NavBarDD from './NavBarDD'

function NavBar({ setShowLogin, setShowSignUp}) {

    const { user } = useContext(UserContext);
    // const [showLogin, setShowLogin] = useState(false)
    // const [showSignUp, setShowSignUp] = useState(false)

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
                    <Link exact to="/">
                        <div className="logo-full" onClick={handleHideForms}>
                            <img className="logo" src={logo} 
                            alt="CampNYS Logo of a tree and mountain that look like a tent"></img>
                            <h1>CampNYS</h1>
                        </div>
                    </Link>
            </div>
            { user ? null :
            <ul className="navbarRight">
                    <h4>Please 
                        <button id="login" className="LP" onClick={handleRevealLogin}><i>Login</i></button> 
                            or 
                        <button id="signup" className="LP" onClick={handleRevealSignUp}><i>Signup</i></button>
                    </h4>
            </ul> }
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