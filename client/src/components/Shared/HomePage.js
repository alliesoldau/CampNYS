import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import HomePageStyles from '../../styles/HomePageStyles.js'
import { CamperReservationsContext } from '../Context/CamperReservationsContext'
import adk_logo from '../../images/adk_logo.png'
import cat_logo from '../../images/cat_logo.png'
// import lg_logo from '../../images/lg_logo.png'

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
                <p>CampNYS was built to serve folks visiting NYS campgrounds by offering an all-in-one portal
                    to explore and reserve campsites.</p>
                <p>Gone are the days of cross-referencing 17 websites, multiple phone calls, and snail mail reservations.
                    With CampNYS you can spend less time online, and more time outside.
                </p>
                <p>The Beta version focuses on the Adirondack High Peaks Wilderness, Lake George, and the Catskills.</p>
                <div className="logo-container">
                    <img src={adk_logo}/>
                    {/* <img src={lg_logo}/> */}
                    <img src={cat_logo}/>
                </div>
            </div>
        </div>
        : null }

        </HomePageStyles>
    )
}

export default HomePage;