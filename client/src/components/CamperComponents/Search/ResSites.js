import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'

function ResSites({ resSite, setSelectedSite }) {

    const { user } = useContext(UserContext)

    function handleClick() {
        setSelectedSite(resSite)
        console.log(resSite)
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