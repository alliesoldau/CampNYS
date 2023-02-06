import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { CampgroundDetailsContext } from '../Context/CampgroundDetailsContext'
import { SiteContext } from '../Context/SiteContext'


function Sites({ site }) {

    const { campgroundDetails } = useContext(CampgroundDetailsContext)
    const { siteDetails, setSiteDetails } = useContext(SiteContext)

    const history = useHistory()

    function handleClick() {
        setSiteDetails(site)
        history.push(`/site/${site.id}`)
    }

    return (
        <>
            <p>campground: {campgroundDetails.name}</p>
            <p>site name: {site.name} </p>
            <button onClick={handleClick}>See Site Details</button>
        </>
    )
}

export default Sites;