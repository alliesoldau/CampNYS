import React, { useContext } from 'react'
import CamperResDetails from './CamperResDetails'
import { CamperReservationsContext } from '../../Context/CamperReservationsContext'
import Reservations from '../../../styles/Reservations'

function CamperReservations() {

    const { campRes } = useContext(CamperReservationsContext)

    // the colors array is used to set the header color of the cards different colors every 4
    const colors = ["red", "teal", "purple", "orange"]
    let count = 0
    const reservations = campRes.map((res) => {
        count = count + 1
        if (count > 4) {
            count = 1
        }
        let color = colors[count - 1]
        return(
            <CamperResDetails 
                key={res.id}
                res={res}
                color={color}
            />
        )
    })

    let reservationMessage = ''
    if (!campRes || campRes.length === 0){
        reservationMessage = "You don't have any reservations..."
    } else if (campRes.length == 1) {
        reservationMessage = "You have 1 reservation..."
    } else {
        reservationMessage = `You have ${campRes.length} reservations...`
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