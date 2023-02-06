import React, { useContext, useEffect } from 'react'
// import { HostCampgroundsContext } from '../Context/HostCampgroundsContext'
import { UserContext } from '../Context/UserContext'
import Campgrounds from './Campgrounds'

function HostCampgrounds() {

    const { user } = useContext(UserContext)

    return (
            <>
            { user.campgrounds && user.campgrounds.length > 0 ? 
            <>
                <p>Host Campgrounds</p>
                <p><b>MAKE IT SO YOU CAN ADD A CAMPGROUND!</b></p>
                 {user.campgrounds.map((cg) => {
                    return(
                        <Campgrounds 
                            key={cg.id}
                            cg={cg}
                        />
                    )
                })}
            </>
            : <p>You have no campgrounds</p> }
            </>
    )
}

export default HostCampgrounds;