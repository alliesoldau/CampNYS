import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import Sites from './Sites'
import { CampgroundDetailsContext } from '../Context/CampgroundDetailsContext'

function SitesSummary() {
    
    const { campgroundDetails } = useContext(CampgroundDetailsContext)

    const sites = campgroundDetails.sites.map((site) => {
        return(
            <Sites 
                key={site.id}
                site={site}
            />
        )
    })

    return (
        <>
            <Link to={`/host/campground/${campgroundDetails.id}`}>
                <button>Back to Campground</button>
            </Link>
            <p>Sites Summary</p>
            <p><b>MAKE IT SO YOU CAN ADD A SITE!</b></p>
            {sites}
        </>
    )
}

export default SitesSummary;