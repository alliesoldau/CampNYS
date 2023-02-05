import React, { useContext } from 'react';
import { CampgroundDetailsContext } from '../Context/CampgroundDetailsContext'
import { useHistory } from 'react-router-dom'

function Campgrounds({ cg }) {

    const { setCampgroundDetails } = useContext(CampgroundDetailsContext)
    const history = useHistory()

    function handleClick() {
        setCampgroundDetails(cg)
        console.log(cg)
        history.push(`/host/campground/${cg.id}`)
    }

    return (
        <>
            <p>campground name: {cg.name} </p>
            <p>reservations: {cg.reservations.length}</p>
            <button onClick={handleClick}>See Campground Details</button>
        </>
    )
}

export default Campgrounds;