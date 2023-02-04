import React, { useContext } from 'react';
import { CampgroundDetailsContext } from '../Context/CampgroundDetailsContext'

function CampgroundDetails() {

    const { campgroundDetails, setCampgroundDetails } = useContext(CampgroundDetailsContext)
    return (
        <>
        <p>campground details</p>
        <p>name: {campgroundDetails.name}</p>
        </>
    )
}

export default CampgroundDetails;