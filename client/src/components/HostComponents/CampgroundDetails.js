import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom'
import { CampgroundDetailsContext } from '../Context/CampgroundDetailsContext'
import { HostCampgroundsContext } from '../Context/HostCampgroundsContext'
import { DeleteCampground } from '../Stores/Fetches'

function CampgroundDetails() {

    const { campgroundDetails } = useContext(CampgroundDetailsContext)
    const { hostCampgrounds, setHostCampgrounds} = useContext(HostCampgroundsContext)

    const history = useHistory()

    function handleDelete() {
        const campgroundsSansDelete = hostCampgrounds.filter((cg) => cg.id !== campgroundDetails.id)
        setHostCampgrounds(campgroundsSansDelete)
        DeleteCampground(campgroundDetails.id)
        history.push(`/hosts/${campgroundDetails.host_id}/campgrounds`)
    }

    return (
        <>
            <Link to={`/hosts/${campgroundDetails.host_id}/campgrounds`}>
                <button>Back to My Campgrounds</button>
            </Link>
            <p>campground details</p>
            <p>name: {campgroundDetails.name}</p>
            <p>openning date: {campgroundDetails.openning_date}</p>
            <p>closing date: {campgroundDetails.closing_date}</p>
            <p>accessibility: {campgroundDetails.accessibility}</p>
            <p>reservations: {campgroundDetails.reservations.length}</p>
            <p>sites: {campgroundDetails.sites.length}</p>
            <img src={campgroundDetails.image_url} style={{height: "100px"}}></img>
            <Link to={`/campground/${campgroundDetails.id}/edit`}>
                <button>Edit Campground Details</button>
            </Link>
            <Link to={`/campground/${campgroundDetails.id}/sites`}>
                <button>View All Sites</button>
            </Link>
            <button onClick={handleDelete}>Delete Campground</button>
        </>
    )
}

export default CampgroundDetails;