import React, { useContext } from 'react';
import { CampgroundDetailsContext } from '../Context/CampgroundDetailsContext'
import { useHistory } from 'react-router-dom'

function Campgrounds({ cg }) {

    const { setCampgroundDetails } = useContext(CampgroundDetailsContext)
    const history = useHistory()

    console.log(cg)

    function handleClick() {
        setCampgroundDetails(cg)
        history.push(`/host/campground/${cg.id}`)
    }

    return (
        <>
        { cg ? 
            <>
                <p>campground name: {cg.name} </p>
                <p>reservations: {cg.res_count}</p>
                <button onClick={handleClick}>See Campground Details</button>
            </>
        : null }
        </>
    )
}

export default Campgrounds;