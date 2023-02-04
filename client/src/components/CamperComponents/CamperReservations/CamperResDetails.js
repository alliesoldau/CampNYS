import React, { useContext } from 'react';
import { CampgroundContext } from '../../Context/CampgroundContext'
import { CamperReservationsContext } from '../../Context/CamperReservationsContext'
import { DeleteReservation } from '../../Stores/Fetches'

function CamperResDetails({ res }) {

    const { campgrounds } = useContext(CampgroundContext)
    const { campRes, setCampRes } = useContext(CamperReservationsContext)
    const myCampground = campgrounds.find((campground) => campground.id === res.site.campground_id)

    function handleDeleteReservation() {
        DeleteReservation(res.id)
        const resSansDeleted = campRes.filter(reservation => res.id !== reservation.id)
        setCampRes(resSansDeleted)
    }
    return (
        <>
            <p>campground name: {myCampground.name}</p>
            <p>campground accessibility: {myCampground.accessibility}</p>
            <p>arrival date: {res.start_date}</p>
            <p>checkout date: {res.end_date}</p>
            <p>registered cars: {res.cars}</p>
            <p>registered campers: {res.number_of_people}</p>
            <button onClick={handleDeleteReservation}>Delete Reservation</button>
        </>
    )
}

export default CamperResDetails;