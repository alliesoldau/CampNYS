import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom'
import { CampgroundDetailsContext } from '../Context/CampgroundDetailsContext'
import { SiteContext } from '../Context/SiteContext'
import { DeleteSite } from '../Stores/Fetches'

function SiteDetails() {

    const { campgroundDetails } = useContext(CampgroundDetailsContext)
    const { siteDetails, setSiteDetails } = useContext(SiteContext)
    
    const history = useHistory()

    function handleDelete() {
        console.log('handle this delete button')
        DeleteSite(siteDetails.id)
        // TO DO: this patch works in the back end but now i need to persist it to the front end without reload 
        // filter through all sites for the campground and take it out 
        // i think i need to go through campgroundDetails.sites.filter ? 
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
                <button onClick={console.log('edit button')}>Edit Site Details</button>
            {/* </Link> */}
            <button onClick={handleDelete}>Delete Site</button>
        </>
    )
}

export default SiteDetails;