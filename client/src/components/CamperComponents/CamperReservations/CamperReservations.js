import React, { useContext } from 'react'
import CamperResDetails from './CamperResDetails'
import { UserContext } from '../../Context/UserContext'
import { CamperReservationsContext } from '../../Context/CamperReservationsContext'

function CamperReservations() {

    // TO DO: fix auto login issue to retain context thats lost on refresh 

    const { campRes } = useContext(CamperReservationsContext)
    const { user } = useContext(UserContext)

    // console.log(user)
    // console.log(campRes)

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
        <>
            { reservationMessage }
            { reservations }
        </>
    )
}

export default CamperReservations;