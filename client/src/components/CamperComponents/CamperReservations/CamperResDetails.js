import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { CampgroundContext } from '../../Context/CampgroundContext'
import { CamperReservationsContext } from '../../Context/CamperReservationsContext'
import { DeleteReservation } from '../../Stores/Fetches'
import ResCard from '../../../styles/ResCard'

function CamperResDetails({ res }) {

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
        <ResCard>
        { myCampground ? 
            <div className="card">
                <div className="left-container">
                    <div className="text">
                        <p>campground name: {myCampground.name}</p>
                        <p>campground accessibility: {myCampground.accessibility}</p>
                        <p>arrival date: {res.start_date}</p>
                        <p>checkout date: {res.end_date}</p>
                        <p>registered cars: {res.cars}</p>
                        <p>registered campers: {res.number_of_people}</p>
                    </div>
                    <div className="buttons">
                        <Link to={`/reservation/${res.id}/edit`}>
                            <button>Edit Reservation</button>
                        </Link>
                        <button onClick={handleDeleteReservation}>Delete Reservation</button>
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