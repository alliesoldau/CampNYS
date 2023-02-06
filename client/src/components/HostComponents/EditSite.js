import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom'
import { CampgroundDetailsContext } from '../Context/CampgroundDetailsContext'
import { SiteContext } from '../Context/SiteContext'

function EditSite() {

    // const history = useHistory()

    // const { campgrounds } = useContext(CampgroundContext)
    // const { reservation } = useContext(ReservationDetailsContext)
    // const { campRes, setCampRes } = useContext(CamperReservationsContext)

    // const myCampground = (campgrounds.find((campground) => campground.id === reservation.site.campground_id))

    // const [formData, setFormData] = useState({
    //     id: reservation.id,
    //     start_date: reservation.start_date,
    //     end_date: reservation.end_date,
    //     cars: reservation.cars,
    //     number_of_people: reservation.number_of_people
    // })

    // const { id, start_date, end_date, cars, number_of_people } = formData

    // const handleChange = (e) => {
    //     const { name, value } = e.target
    //     setFormData({ ...formData, [name]: value })
    // }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     EditResInfo(formData).then((resData) => {
    //         const updateReservations = campRes.map((res)=> res.id === resData.id ? resData : res)
    //         setCampRes(updateReservations)
    //         history.push(`/campers/${resData.camper_id}/reservations`)
    //     })
    // }


    return (
        <>
            <p>Edit Site </p>
            {/* <p>campground name: {myCampground.name}</p>
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
            </> */}
        </>
    )
}

export default EditSite;