import React, { useContext, useEffect } from 'react';
import CamperResDetails from './CamperResDetails'
import { UserContext } from '../../Context/UserContext'
import { CamperReservationsContext } from '../../Context/CamperReservationsContext'
import { GrabCamperReservations } from '../../Stores/Fetches'

function CamperReservations() {

    const { campRes, setCampRes } = useContext(CamperReservationsContext);
    const { user } = useContext(UserContext);

    useEffect(() => {
        console.log(user)
        GrabCamperReservations(user.id).then(setCampRes)
    },[])

    const reservations = campRes.map((res) => {
        return(
            <CamperResDetails 
                key={res.id}
                res={res}
            />
        )
    })

    return (
        <>
            <p>Camper Reservations</p>
            { campRes ? <p>{campRes.length}</p> : <p>no res</p> }
            { reservations }
        </>
    )
}

export default CamperReservations;