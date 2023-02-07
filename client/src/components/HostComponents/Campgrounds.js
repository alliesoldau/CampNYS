import React from 'react';
import { useHistory } from 'react-router-dom'

function Campgrounds({ cg }) {

    const history = useHistory()

    function handleClick() {
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