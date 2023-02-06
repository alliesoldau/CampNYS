import React, { useContext, useState } from 'react'
import { useHistory } from "react-router-dom"
import { CampgroundContext } from '../../Context/CampgroundContext'
import { ReservationDetailsContext } from '../../Context/ReservationDetailsContext'
import { CamperReservationsContext } from '../../Context/CamperReservationsContext'
import { EditResInfo } from '../../Stores/Fetches'

function EditCamperRes() {

    const history = useHistory()

    const { campgrounds } = useContext(CampgroundContext)
    const { reservation, setReservation } = useContext(ReservationDetailsContext)
    const { campRes } = useContext(CamperReservationsContext)

    // im having a conditional rendering problem bc when i update context for the front end 
    // it confuses the page bc reservation.site doesn't exist so it doesnt update the front end

    const myCampground = (campgrounds.find((campground) => campground.id === reservation.site.campground_id))

    // console.log(reservation)
    // console.log(myCampground)

    const [formData, setFormData] = useState({
        id: reservation.id,
        start_date: reservation.start_date,
        end_date: reservation.end_date,
        cars: reservation.cars,
        number_of_people: reservation.number_of_people
    })

    const { id, start_date, end_date, cars, number_of_people } = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        EditResInfo(formData).then((resData) => {
            // TO DO: front end isnt updating in time
            const updateReservations = campRes.map((res)=> res.id === resData.id ? resData : res)
            // console.log(resData)
            setReservation(updateReservations)
            history.push(`/campers/${resData.camper_id}/reservations`)
        })
    }

    // TO DO: limit what people can put in
    // dates have to be when there is availability
    // end date must be after start date
    // dates cant be out of season
    // people cant exceed capacity
    // cars cant exceed capacity
    return (
        // <>
        // { reservation ? 
        <>
            <p>Edit Camper Res</p>
            <p>campground name: {myCampground.name}</p>
            <p>campground accessibility: {myCampground.accessibility}</p>
            <p>people capacity: {reservation.site.capacity}</p>
            <p>car capacity: {reservation.site.car_capacity}</p>
            <>
            <p>Edit Reservation</p>
                <form onSubmit={handleSubmit}>
                    <label>Arrival Date</label>
                        <input type='date' name='start_date' value={start_date} onChange={handleChange} />

                    <label>Check Out Date</label>
                        <input type='date' name='end_date' value={end_date} onChange={handleChange} />

                    <label>Cars</label>
                        <input type='text' name='cars' value={cars} onChange={handleChange} />
                        
                    <label>Number of People</label>
                        <input type='text' name='number_of_people' value={number_of_people} onChange={handleChange} />

                    <button type='submit'>Submit Edits</button>
            </form>
            </>
        </>
        // : null}
        // </>
    )
}

export default EditCamperRes;