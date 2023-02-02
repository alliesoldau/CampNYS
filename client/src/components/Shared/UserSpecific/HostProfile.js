import React, { useContext } from 'react';
import { UserContext } from '../../Context/UserContext'

function HostProfile() {

    const { user } = useContext(UserContext);

    return (
        <>
            <h4>Affiliation</h4>
            <p>{user.affiliation}</p>
        </>
    )
}

export default HostProfile;