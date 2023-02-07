import React, { useContext } from 'react';
import { useHistory, Link, useParams } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import { DeleteCampground } from '../Stores/Fetches'

function CampgroundDetails() {

    const { user, setUser } = useContext(UserContext)
    const history = useHistory()
    const params = useParams()

    // why do i need to parseInt my params???
    let campground
    if (user) {
        campground = user.campgrounds.find((cg) => { return ( cg.id === parseInt(params.id) ) })
    }

    function handleDelete() {
        const campgroundsSansDelete = user.campgrounds.filter((cg) => cg.id !== campground.id)
        const updatedUser = {...user, campgrounds: campgroundsSansDelete}
        setUser(updatedUser)
        DeleteCampground(campground.id)
        history.push(`/hosts/${campground.host_id}/campgrounds`)
    }

    return (
        <>
        { campground ? 
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
            : null}
        </>
    )
}

export default CampgroundDetails;