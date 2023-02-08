import React, { useContext, useState, useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom"
import { CampgroundContext } from '../../Context/CampgroundContext'
import { CamperReservationsContext } from '../../Context/CamperReservationsContext'
import { EditResInfo } from '../../Stores/Fetches'

function EditCamperRes() {

    const history = useHistory()
    const params = useParams()

    const { campgrounds } = useContext(CampgroundContext)
    const { campRes, setCampRes } = useContext(CamperReservationsContext)
    const [formData, setFormData] = useState({})

    const myRes = campRes.find((res) => { return ( res.id === parseInt(params.id))})
    let myCampground
    if (myRes) {
        myCampground = campgrounds.find((cg) => { return ( cg.id === myRes.site.campground_id ) })
    }

    useEffect(() => {
        if (myRes) {
            setFormData({
                id: params.id,
                start_date: myRes.start_date,
                end_date: myRes.end_date,
                cars: myRes.cars,
                number_of_people: myRes.number_of_people
            })
        }
    },[myRes])

    const { start_date, end_date, cars, number_of_people } = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        EditResInfo(formData).then((resData) => {
            const updateReservations = campRes.map((res)=> res.id === resData.id ? resData : res)
            setCampRes(updateReservations)
            history.push(`/campers/${resData.camper_id}/reservations`)
        })
    }

    // TO DO: limit what people can put in
    // dates have to be when there is availability
    // end date must be after start date
    // dates cant be out of season

    return (
        <>
        { myRes && myCampground ? <> 
            <p>Edit Camper Res</p>
            <p>campground name: {myCampground.name}</p>
            <p>campground accessibility: {myCampground.accessibility}</p>
            <>
                <p>Edit Reservation</p>
                    <form onSubmit={handleSubmit}>
                        <label>Arrival Date</label>
                            <input type='date' name='start_date' value={start_date} onChange={handleChange} />

                        <label>Check Out Date</label>
                            <input type='date' name='end_date' value={end_date} onChange={handleChange} />

                        <label>Cars</label>
                            <input type='number' min={0} max={myRes.site.car_capacity} name='cars' value={cars} onChange={handleChange} />
                            
                        <label>Number of People</label>
                            <input type='number' min={0} max={myRes.site.capacity} name='number_of_people' value={number_of_people} onChange={handleChange} />

                        <button type='submit'>Submit Edits</button>
                    </form>
                </>
            </> : null }
        </>
    )
}

export default EditCamperRes;