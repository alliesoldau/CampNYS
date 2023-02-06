import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom'
import { CampgroundDetailsContext } from '../Context/CampgroundDetailsContext'
import { SiteContext } from '../Context/SiteContext'
import { DeleteSite } from '../Stores/Fetches'

function SiteDetails() {

    const { campgroundDetails, setCampgroundDetails } = useContext(CampgroundDetailsContext)
    const { siteDetails } = useContext(SiteContext)

    const history = useHistory()

    function handleDelete(e) {
        e.preventDefault();
        DeleteSite(siteDetails.id)
        // TO DO: the back and front end work independently but together they crash
        const updateCGSites = campgroundDetails.sites.filter((site) => site.id !== siteDetails.id)
        const updateCG = campgroundDetails
        updateCG.sites = updateCGSites
        setCampgroundDetails(updateCG)
        history.push(`/campground/${siteDetails.id}/sites`)
    }

    return (
        <>
            <Link to={`/campground/${campgroundDetails.id}/sites`}>
                <button>Back to All Sites</button>
            </Link>
            <p>Site Details</p>
            <p>campground: {campgroundDetails.name}</p>
            <p>site name: {siteDetails.name} </p>
            <p>site category: {siteDetails.category}</p>
            <p>site car capactiy: {siteDetails.car_capacity}</p>
            {/* TO DO: hook up this link, its made up rn  */}
            {/* <Link to={`/site/${site.id}/edit`}> */}
                <button onClick={console.log('set up editting functionality')}>Edit Site Details</button>
            {/* </Link> */}
            <button onClick={handleDelete}>Delete Site</button>
        </>
    )
}

export default SiteDetails;