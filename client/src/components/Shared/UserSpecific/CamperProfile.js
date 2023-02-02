import React, { useContext } from 'react';
import { UserContext } from '../../Context/UserContext'

function CamperProfile() {

    const { user } = useContext(UserContext);

    return (
        <>
            <p>Camper Profile</p>>
        </>
    )
}

export default CamperProfile;