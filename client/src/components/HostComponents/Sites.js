import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'

function Sites({ site }) {

    const { user } = useContext(UserContext)

    const history = useHistory()

    const campground = user.campgrounds.find((cg) => { return ( cg.id === site.campground_id ) })
    const thisSite = campground.sites.find((cgSite) => { return ( cgSite.id === site.id) })


    function handleClick() {
        history.push(`/campgrounds/${campground.id}/site/${site.id}/`)
    }

    return (
        <>
            <p>campground: {campground.name}</p>
            <p>site name: {thisSite.name} </p>
            <button onClick={handleClick}>See Site Details</button>
        </>
    )
}

export default Sites;