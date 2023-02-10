import React, { useContext } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import { DeleteSite } from '../Stores/Fetches'
import SiteCard from '../../styles/SiteCard'

function Sites({ site }) {

    const { user, setUser } = useContext(UserContext)

    const history = useHistory()

    const campground = user.campgrounds.find((cg) => { return ( cg.id === site.campground_id ) })
    const thisSite = campground.sites.find((cgSite) => { return ( cgSite.id === site.id) })

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
        <SiteCard>
            <div className="card">
                <div className="text">
                    <h2>Campground: {campground.name}</h2>
                    <h3>Site name: {thisSite.name} </h3>
                    <h3>Site category: {thisSite.category}</h3>
                    <h3>Site capacity: {thisSite.capacity}</h3>
                    <h3>Site car capactiy: {thisSite.car_capacity}</h3>
                </div>
                <div className="buttons">
                    <Link to={`/campgrounds/${campground.id}/site/${thisSite.id}/edit`}>
                        <button className="edit">Edit Site Details</button>
                    </Link>
                        <button className="delete" onClick={handleDelete}>Delete Site</button>
                </div>
                </div>
        </SiteCard>
    )
}

export default Sites;