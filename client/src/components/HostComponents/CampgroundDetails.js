import React, { useContext, useEffect } from 'react';
import { useHistory, Link, useParams } from 'react-router-dom'
import { CampgroundDetailsContext } from '../Context/CampgroundDetailsContext'
import { UserContext } from '../Context/UserContext'
import { DeleteCampground } from '../Stores/Fetches'

function CampgroundDetails() {

    const { campgroundDetails } = useContext(CampgroundDetailsContext)
    const { user } = useContext(UserContext)

    console.log(user)

    const history = useHistory()
    const params = useParams()

    // why do i need to parseInt my params???
    
    const campground = user.campgrounds.find((cg) => { return ( cg.id === parseInt(params.id) ) })

    function handleDelete() {
        // const campgroundsSansDelete = hostCampgrounds.filter((cg) => cg.id !== campgroundDetails.id)
        // setHostCampgrounds(campgroundsSansDelete)
        // DeleteCampground(campgroundDetails.id)
        history.push(`/hosts/${campgroundDetails.host_id}/campgrounds`)
    }

    return (
        <>
            <Link to={`/hosts/${campground.host_id}/campgrounds`}>
                <button>Back to My Campgrounds</button>
            </Link>
            <p>campground details</p>
            <p>name: {campground.name}</p>
            <p>openning date: {campground.openning_date}</p>
            <p>closing date: {campground.closing_date}</p>
            <p>accessibility: {campground.accessibility}</p>
            <p>reservations: {campground.res_count}</p>
            <p>sites: {campground.site_count}</p>
            <img src={campground.image_url} style={{height: "100px"}}></img>
            <Link to={`/campground/${campground.id}/edit`}>
                <button>Edit Campground Details</button>
            </Link>
            <Link to={`/campground/${campground.id}/sites`}>
                <button>View All Sites</button>
            </Link>
            <button onClick={handleDelete}>Delete Campground</button>
        </>
    )
}

export default CampgroundDetails;