import React, { useContext } from 'react';
// import { CampgroundContext } from '../../Context/CampgroundContext'

function CamperResDetails({ res }) {

    // const { campgrounds } = useContext(CampgroundContext)
    console.log(res)
    
    return (
        <>
            <p>CamperResDetails</p>
            {/* TO DO: add in all of the information for the reservations!  */}
            <p>res id: {res.id}</p>
            <p>res site id: {res.site_id}</p>
            <p>campground id: {res.site.campground_id}</p>
        </>
    )
}

export default CamperResDetails;