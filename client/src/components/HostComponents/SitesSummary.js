import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom'
import Sites from './Sites'
import { UserContext } from '../Context/UserContext'

function SitesSummary() {
    
    const { user } = useContext(UserContext)
    const params = useParams()

    // TO DO: on refresh it gets map about the user.campgrounds -> how can i make it wait until user is updated? 
    const campground = user.campgrounds.find((cg) => { return ( cg.id === parseInt(params.id) ) })

    return (
        <>
            <Link to={`/host/campground/${campground.id}`}>
                <button>Back to Campground</button>
            </Link>
            <p>Sites Summary</p>
            <p><b>MAKE IT SO YOU CAN ADD A SITE!</b></p>
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
        </>
    )
}

export default SitesSummary;