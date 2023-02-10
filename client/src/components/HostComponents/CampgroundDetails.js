import React, { useContext } from 'react';
import { useHistory, Link, useParams } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import { DeleteCampground } from '../Stores/Fetches'
import arrow from '../../images/back_arrow.png'
import ArrowHeader from '../../styles/ArrowHeader'
import CGDetailsCard from '../../styles/CGDetailsCard'

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
        <CGDetailsCard>
        { campground ? 
        <>
            <ArrowHeader>
                <div className="top">
                    <Link to={`/hosts/${campground.host_id}/campgrounds`}>
                        <img className="arrow" src={arrow}></img>
                    </Link>
                    <h1>Back to All Campgrounds</h1>
                </div>
            </ArrowHeader>
            <div className="card">
                <div className="left-container">
                    <div className="text">
                        <h4>{campground.name}</h4>
                        <p>Openning Date: <span>{campground.openning_date}</span></p>
                        <p>Closing Date: <span>{campground.closing_date}</span></p>
                        <p>Accessible By: <span>{campground.accessibility}</span></p>
                        <p>Reservations: <span>{campground.res_count}</span></p>
                        <p>Sites: <span>{campground.site_count}</span></p>
                    </div>
                    <div className="buttons">
                        <Link to={`/campground/${campground.id}/edit`}>
                            <button className="edit">Edit Details</button>
                        </Link>
                        <Link to={`/campground/${campground.id}/sites`}>
                            <button className="sites">View Sites</button>
                        </Link>
                        <button className="delete" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
                <div className="right-container">
                    <img src={campground.image_url}></img>
                </div>
            </div>
            </>
            : null}
        </CGDetailsCard>
    )
}

export default CampgroundDetails;