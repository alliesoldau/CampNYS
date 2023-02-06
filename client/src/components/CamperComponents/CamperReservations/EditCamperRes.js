import React, { useContext } from 'react';
import { CampgroundContext } from '../../Context/CampgroundContext'
import { ReservationDetailsContext } from '../../Context/ReservationDetailsContext'

function EditCamperRes() {

    const { campgrounds } = useContext(CampgroundContext)
    const { reservation } = useContext(ReservationDetailsContext)

    const myCampground = campgrounds.find((campground) => campground.id === reservation.site.campground_id)

    console.log(reservation)
    console.log(myCampground)

    return (
        <>
            <p>Edit Camper Res</p>
            <p>campground name: {myCampground.name}</p>
            <p>campground accessibility: {myCampground.accessibility}</p>
            <p>arrival date: {reservation.start_date}</p>
            <p>checkout date: {reservation.end_date}</p>
            <p>registered cars: {reservation.cars}</p>
            <p>people capacity: {reservation.site.capacity}</p>
            <p>car capacity: {reservation.site.car_capacity}</p>
            <p>registered campers: {reservation.number_of_people}</p>
        </>
    )
}

export default EditCamperRes;