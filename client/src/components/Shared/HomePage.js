import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import HomePageStyles from '../../styles/HomePageStyles.js'

// import bog from '../../images/bog.jpeg'

function HomePage() {

    const { user } = useContext(UserContext);

    return (
        <HomePageStyles>
        { user ?
        <div>
            {/* <p>Welcome {user.first_name} {user.last_name}</p> */}
            {/* <img className="bog" src={bog}></img> */}
        </div>
            : null }

        </HomePageStyles>
    )
}

export default HomePage;