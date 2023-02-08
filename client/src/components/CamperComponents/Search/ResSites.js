import React from 'react'

function ResSites({ resSite, setSelectedSite }) {

    function handleClick() {
        setSelectedSite(resSite)
    }

    return (
        <>
        { resSite ? 
            <> 
                <p>site name: {resSite.name} </p>
                <p>site category: {resSite.category}</p>
                <p>site capacity: {resSite.capacity}</p>
                <p>site car capactiy: {resSite.car_capacity}</p>
                <button onClick={handleClick}>Pick This Site</button>
            </> : null }
        </>
    )
}

export default ResSites;