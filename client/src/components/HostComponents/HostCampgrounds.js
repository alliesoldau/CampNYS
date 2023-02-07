import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import Campgrounds from './Campgrounds'

function HostCampgrounds() {
    const { user } = useContext(UserContext)
    const history = useHistory()

    function handleClick() {
        history.push(`/host/${user.id}/add_campground`)
    }

    return (
            <>
            { user && user.campgrounds && user.campgrounds.length > 0 ? 
            <>
                <p>Host Campgrounds</p>
                <button onClick={handleClick}>Add Campground</button>
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