import React, { useContext } from 'react';
import { CampgroundContext } from '../../Context/CampgroundContext'

function CamperResDetails({ res }) {

    const { campgrounds } = useContext(CampgroundContext)
    const myCampground = campgrounds.find((campground) => campground.id === res.site.campground_id)
    console.log(myCampground)

    return (
        <>
            <p>CamperResDetails</p>
            {/* TO DO: add in all of the information for the reservations!  */}
            <p>res id: {res.id}</p>
            <p>res site id: {res.site_id}</p>
            <p>campground name: {myCampground.name}</p>

        </>
    )
}

export default CamperResDetails;