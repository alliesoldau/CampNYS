import React, { useContext, useState, useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom"
import { CampgroundContext } from '../../Context/CampgroundContext'
import { CamperReservationsContext } from '../../Context/CamperReservationsContext'
import { EditResInfo } from '../../Stores/Fetches'
import ResCard from '../../../styles/ResCard'
import Form from '../../../styles/Form'


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
        <ResCard>
        { myRes && myCampground ? 
        <div className="edit-card"> 
            <div className="left-container">
                <div className="text">
            <h4>{myCampground.name}</h4>
            <p><i>Accessibile By: {myCampground.accessibility}</i></p>
            <>
                <form onSubmit={handleSubmit}>
                    <Form>
                    <div className="line-item">
                        <label>Arrival Date</label>
                        <input type='date' name='start_date' value={start_date} onChange={handleChange} />
                    </div>
                    <div className="line-item">
                        <label>Check Out Date</label>
                        <input type='date' name='end_date' value={end_date} onChange={handleChange} />
                    </div>
                    <div className="line-item">
                        <label>Cars</label>
                        <input type='number' min={0} max={myRes.site.car_capacity} name='cars' value={cars} onChange={handleChange} />
                    </div>
                    <div className="line-item">
                        <label>Number of People</label>
                        <input type='number' min={0} max={myRes.site.capacity} name='number_of_people' value={number_of_people} onChange={handleChange} />
                    </div>
                    <div className="buttons">
                        <button className="submit" type='submit'>Submit Edits</button>
                    </div>
                    </Form>
                </form>
            </>
            </div>
        </div>
        <div className="right-container">
            <img src={myCampground.image_url}/>
        </div>
        </div> : null }
    </ResCard>
    )
}

export default EditCamperRes;