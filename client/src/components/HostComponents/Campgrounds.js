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
            // unsure how to get the component to 
            // push to the details page for this cg
    }
    return (
        <>
            <p>campground name: {cg.name} </p>
            <p>openning date: {cg.openning_date}</p>
            <p>closing date: {cg.closing_date}</p>
            <p>accessibility: {cg.accessibility}</p>
            <p>reservations: {cg.reservations.length}</p>
            <button onClick={handleClick}>See Campground Details</button>
        </>
    )
}

export default Campgrounds;