import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import SiteCard from '../../styles/SiteCard'

function Sites({ site }) {

    const { user } = useContext(UserContext)

    const history = useHistory()

    const campground = user.campgrounds.find((cg) => { return ( cg.id === site.campground_id ) })
    const thisSite = campground.sites.find((cgSite) => { return ( cgSite.id === site.id) })


    function handleClick() {
        history.push(`/campgrounds/${campground.id}/site/${site.id}/`)
    }

    return (
        <SiteCard>
            <div className="card">
                <div className="text">
                    <h2>Campground: {campground.name}</h2>
                    <h3>Site name: {thisSite.name} </h3>
                </div>
                <div className="buttons">
                    <button onClick={handleClick}>See Site Details</button>
                </div>
            </div>
        </SiteCard>
    )
}

export default Sites;