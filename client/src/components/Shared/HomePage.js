import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import HomePageStyles from '../../styles/HomePageStyles.js'
import { CamperReservationsContext } from '../Context/CamperReservationsContext'


function HomePage() {

    const { user } = useContext(UserContext);
    const { campRes } = useContext(CamperReservationsContext)

    return (
        <HomePageStyles>
        { user && campRes ?
        <div className="homepage-container">
            <div className="left-container">
                <div className="top-left">
                    <div className="greeting">
                        <h4>Welcome {user.first_name} {user.last_name}</h4>
                    </div>
                    <div className="motto">
                        <p>Let the adventures begin!</p>
                    </div>
                </div>
                <div className="bottom-left">
                    <h4>User Summary</h4>
                    <p>Reservations-to-date: {campRes.length}</p>
                </div>
            </div>
            <div className="right-container">
                <h4>About CampNYS</h4>
                <p>Information about the site and its purpose</p>
            </div>
        </div>
        : null }

        </HomePageStyles>
    )
}

export default HomePage;