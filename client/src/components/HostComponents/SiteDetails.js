import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom'
import { CampgroundDetailsContext } from '../Context/CampgroundDetailsContext'
import { SiteContext } from '../Context/SiteContext'
import { HostCampgroundsContext } from '../Context/HostCampgroundsContext'

import { DeleteSite } from '../Stores/Fetches'

function SiteDetails() {

    const { campgroundDetails, setCampgroundDetails } = useContext(CampgroundDetailsContext)
    const { siteDetails } = useContext(SiteContext)
    const { hostCampgrounds, setHostCampgrounds} = useContext(HostCampgroundsContext)


    const history = useHistory()


    function handleDelete(e) {
        e.preventDefault();
        DeleteSite(siteDetails.id)
        // TO DO: refreshing a site delete doesn't persist in context. need to figure out how to make it
        const updateCGSites = campgroundDetails.sites.filter((site) => site.id !== siteDetails.id)
        const updateCG = campgroundDetails
        updateCG.sites = updateCGSites
        setCampgroundDetails(updateCG)

        // const myCG = hostCampgrounds.find((cg) => cg.id === siteDetails.campground_id)
        // const updateHostCampgrounds = hostCampgrounds.map((cg)=> cg.id === siteDetails.campground_id ? myCG : cg)
        // setHostCampgrounds(updateHostCampgrounds)

        // console.log('hostCampgrounds')
        // console.log(hostCampgrounds)
        // console.log('myCG')
        // console.log(myCG)

        history.push(`/campground/${siteDetails.id}/sites`)
    }

    return (
        <>
        { siteDetails && campgroundDetails ? 
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
            <Link to={`/site/${siteDetails.id}/edit`}>
                <button onClick={console.log('set up editting functionality')}>Edit Site Details</button>
            </Link>
            <button onClick={handleDelete}>Delete Site</button>
            </> : null }
        </>
    )
}

export default SiteDetails;