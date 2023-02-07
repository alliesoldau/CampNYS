import React, { useContext } from 'react';
import { useHistory, Link, useParams } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import { CampgroundContext } from '../Context/CampgroundContext'
import { DeleteSite } from '../Stores/Fetches'

function SiteDetails() {

    const { user } = useContext(UserContext)
    const params = useParams()

    console.log(user.campgrounds)

    // TO DO: I NEED A WAY TO GET THE CAMPGROUND ID FRMO THE SITE SO THAT I CAN MOVE FORWARD W VIEWING THE DETAILS! 

    // const campground = user.campgrounds.find((cg) => { return ( cg.id === need to get the cmapground id from the site )) })
    // console.log(campground)
    // const thisSite = campground.sites.find((cgSite) => { return ( cgSite.id === parseInt(params.id)) })
    // console.log(thisSite)

    const history = useHistory()


    function handleDelete(e) {
        e.preventDefault();
        // DeleteSite(siteDetails.id)
        // TO DO: refreshing a site delete doesn't persist in context. need to figure out how to make it
        // const updateCGSites = campgroundDetails.sites.filter((site) => site.id !== siteDetails.id)
        // const updateCG = campgroundDetails
        // updateCG.sites = updateCGSites
        // setCampgroundDetails(updateCG)


        // history.push(`/campground/${siteDetails.id}/sites`)
    }

    return (
        <>
        {/* { siteDetails && campgroundDetails ? 
        <>
            <Link to={`/campground/${campgroundDetails.id}/sites`}>
                <button>Back to All Sites</button>
            </Link>
            <p>Site Details</p>
            <p>campground: {campgroundDetails.name}</p>
            <p>site name: {siteDetails.name} </p>
            <p>site category: {siteDetails.category}</p>
            <p>site car capactiy: {siteDetails.car_capacity}</p> */}
            {/* TO DO: hook up this link, its made up rn  */}
            {/* <Link to={`/site/${siteDetails.id}/edit`}>
                <button onClick={console.log('set up editting functionality')}>Edit Site Details</button>
            </Link>
            <button onClick={handleDelete}>Delete Site</button>
            </> : null } */}
            <p>site details</p>
        </>
    )
}

export default SiteDetails;