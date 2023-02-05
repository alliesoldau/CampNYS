import React, { useContext } from 'react';
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
            <p>Sites Summary</p>
            {sites}
        </>
    )
}

export default SitesSummary;