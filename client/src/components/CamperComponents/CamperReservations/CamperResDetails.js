import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { CampgroundContext } from '../../Context/CampgroundContext'
import { CamperReservationsContext } from '../../Context/CamperReservationsContext'
import { DeleteReservation } from '../../Stores/Fetches'
import ResCard from '../../../styles/ResCard'

function CamperResDetails({ res, color }) {

    const history = useHistory()

    const { campgrounds } = useContext(CampgroundContext)
    const { campRes, setCampRes } = useContext(CamperReservationsContext)

    let myCampground
    if (campgrounds) {
        myCampground = campgrounds.find((cg) => { return ( cg.id === res.site.campground_id ) })
    }

    function handleDeleteReservation() {
        const resSansDeleted = campRes.filter(reservation => res.id !== reservation.id)
        setCampRes(resSansDeleted)
        history.push(`/campers/${res.camper_id}/reservations`)
        DeleteReservation(res.id)
    }
    
    return (
        <ResCard color={color}>
        { myCampground ? 
            <div className="card">
                <div className="left-container">
                    <div className="text">
                        <h4>{myCampground.name}</h4>
                        <p>Accessible by: <span>{myCampground.accessibility}</span></p>
                        <p>Arrival: <span>{res.start_date}</span></p>
                        <p>Checkout: <span>{res.end_date}</span></p>
                        <p>Registered cars: <span>{res.cars}</span></p>
                        <p>Registered campers: <span>{res.number_of_people}</span></p>
                    </div>
                    <div className="buttons">
                        <Link to={`/reservation/${res.id}/edit`}>
                            <button className="edit">Edit</button>
                        </Link>
                        <button className="delete" onClick={handleDeleteReservation}>Delete</button>
                    </div>
                </div>
                <div className="right-container">
                    <img src={myCampground.image_url}/>
                </div>
            </div> 
        : null }
        </ResCard>
    )
}

export default CamperResDetails;