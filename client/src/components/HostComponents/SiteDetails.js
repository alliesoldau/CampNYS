import React, { useContext } from 'react';
import { useHistory, Link, useParams } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import { DeleteSite } from '../Stores/Fetches'
import arrow from '../../images/back_arrow.png'


function SiteDetails() {

    const { user, setUser } = useContext(UserContext)
    const params = useParams()

    let campground
    let thisSite
    if (user) {
        campground = user.campgrounds.find((cg) => { return ( cg.id === parseInt(params.CGID) ) })
        thisSite = campground.sites.find((cgSite) => { return ( cgSite.id === parseInt(params.siteID)) })
    }

    const history = useHistory()

    function handleDelete(e) {
        e.preventDefault();
        const sitesSansDelete = campground.sites.filter((site) => site.id !== thisSite.id)
        const updatedSites = {...campground, sites: sitesSansDelete}
        const updatedCG = user.campgrounds.map((cg) => cg.id === campground.id? updatedSites : cg)
        const updatedUser = {...user, campgrounds: updatedCG}
        setUser(updatedUser)
        history.push(`/campground/${campground.id}/sites`)
        DeleteSite(thisSite.id)
    }

    return (
        <>
        { campground && thisSite ? 
        <>
            <Link to={`/campground/${campground.id}/sites`}>
                {/* <button>Back to All Sites</button> */}
                <img className="arrow" src={arrow}></img>

            </Link>
            <p>Site Details</p>
            <p>campground: {campground.name}</p>
            <p>site name: {thisSite.name} </p>
            <p>site category: {thisSite.category}</p>
            <p>site capacity: {thisSite.capacity}</p>
            <p>site car capactiy: {thisSite.car_capacity}</p>
            <Link to={`/campgrounds/${campground.id}/site/${thisSite.id}/edit`}>
                <button>Edit Site Details</button>
            </Link>
            <button onClick={handleDelete}>Delete Site</button>
            </>
            : null }
        </>
    )
}

export default SiteDetails;