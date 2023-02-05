import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { CampgroundDetailsContext } from '../Context/CampgroundDetailsContext'


function SiteDetails() {

    const { campgroundDetails } = useContext(CampgroundDetailsContext)

    function handleDelete() {
        console.log('handle this delete button')
        // all these functions are made up fix them 
        // const campgroundsSansDelete = hostCampgrounds.filter((cg) => cg.id !== campgroundDetails.id)
        // setHostCampgrounds(campgroundsSansDelete)
        // DeleteCampground(campgroundDetails.id)
        // history.push(`/hosts/${campgroundDetails.host_id}/campgrounds`)
    }

    return (
        <>
            <Link to={`/campground/${campgroundDetails.id}/sites`}>
                <button>Back to All Sites</button>
            </Link>
            <p>Site Details</p>
            <p>to do: everything</p>
            {/* TO DO: hook up this link, its made up rn  */}
            {/* <Link to={`/site/${site.id}/edit`}> */}
                <button onClick={console.log('edit button')}>Edit Site Details</button>
            {/* </Link> */}
            <button onClick={handleDelete}>Delete Campground</button>
        </>
    )
}

export default SiteDetails;