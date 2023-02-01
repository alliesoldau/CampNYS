import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContext'

function HomePage() {

    const { user } = useContext(UserContext);

    return (
        <>
            <p>Welcome {user.first_name} {user.last_name}</p>
            <p>HomePage</p>
        </>
    )
}

export default HomePage;