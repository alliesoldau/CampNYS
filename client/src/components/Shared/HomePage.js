import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import HomePageStyles from '../../styles/HomePageStyles.js'

function HomePage() {

    const { user } = useContext(UserContext);

    return (
        <HomePageStyles>
        { user ?
        <div className="homepage-container">
            <div className="left-container">
                <div className="top-left">
                    <div className="greeting">
                        <h4>Welcome {user.first_name} {user.last_name}</h4>
                    </div>
                    <div className="motto">
                        <p>Let the adventures begin..!</p>
                    </div>
                </div>
                <div className="bottom-left">
                    <p>Bottom Left</p>
                </div>
            </div>
            <div className="right-container">
                <p>right container</p>
            </div>
        </div>
        : null }

        </HomePageStyles>
    )
}

export default HomePage;