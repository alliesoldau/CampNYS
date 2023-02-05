import React from 'react';
import { useHistory } from 'react-router-dom'


function Sites({ site }) {

    const history = useHistory()


    function handleClick() {
        // TO DO: change this to site details
        // setCampgroundDetails(cg)
        history.push(`/site/${site.id}`)
    }

    return (
        <>
            <p>site name: {site.name} </p>
            <p>whatever else: fill out</p>
            <button onClick={handleClick}>See Site Details</button>
        </>
    )
}

export default Sites;