import React, { useContext } from 'react'
import CamperResDetails from './CamperResDetails'
import { CamperReservationsContext } from '../../Context/CamperReservationsContext'
import Reservations from '../../../styles/Reservations'

function CamperReservations() {

    const { campRes } = useContext(CamperReservationsContext)

    const reservations = campRes.map((res) => {
        return(
            <CamperResDetails 
                key={res.id}
                res={res}
            />
        )
    })

    let reservationMessage = ''
    if (!campRes || campRes.length === 0){
        reservationMessage = "You don't have any reservations"
    } else if (campRes.length == 1) {
        reservationMessage = "You have 1 reservation"
    } else {
        reservationMessage = `You have ${campRes.length} reservations`
    }

    return (
        <Reservations>
            <div className="header">
                { reservationMessage }
            </div>
            <div className="reservation-card-container">
                { reservations }
            </div>
        </Reservations>
    )
}

export default CamperReservations;