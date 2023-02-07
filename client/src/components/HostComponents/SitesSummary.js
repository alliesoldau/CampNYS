import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom'
import Sites from './Sites'
import { UserContext } from '../Context/UserContext'

function SitesSummary() {
    
    const { user } = useContext(UserContext)
    const params = useParams()

    let campground
    if (user) {
        campground = user.campgrounds.find((cg) => { return ( cg.id === parseInt(params.id) ) })
    }

    return (
        <>
        { user ? <>
            <p>Sites Summary</p>
            <Link to={`/host/campground/${campground.id}`}>
                <button>Back to Campground</button>
            </Link>
            <Link to={`/campground/${campground.id}/add_sites`}>
                <button>Add Sites</button>
            </Link>
            { campground.sites && campground.sites.length > 0 ? 
                <>
                {campground.sites.map((site) => {
                return(
                    <Sites 
                        key={site.id}
                        site={site}
                    />
                    )
                })}
                </> : null }
            </> : null }
        </>
    )
}

export default SitesSummary;