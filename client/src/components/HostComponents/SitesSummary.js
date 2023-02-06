import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import Sites from './Sites'
import { CampgroundDetailsContext } from '../Context/CampgroundDetailsContext'

function SitesSummary() {
    
    const { campgroundDetails } = useContext(CampgroundDetailsContext)

    return (
        <>
            <Link to={`/host/campground/${campgroundDetails.id}`}>
                <button>Back to Campground</button>
            </Link>
            <p>Sites Summary</p>
            <p><b>MAKE IT SO YOU CAN ADD A SITE!</b></p>
            { campgroundDetails.sites && campgroundDetails.sites.length > 0 ? 
                <>
                {campgroundDetails.sites.map((site) => {
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