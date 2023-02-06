import React, { useContext } from 'react';
import { ReservationDetailsContext } from '../../Context/ReservationDetailsContext'

function EditCamperRes() {

    const { reservation, setReservation } = useContext(ReservationDetailsContext)

    return (
        <>
            <p>Edit Camper Res</p>
            <p>camper: {reservation.camper_id}</p>
        </>
    )
}

export default EditCamperRes;