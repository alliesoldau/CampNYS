import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContext'

function HomePage() {

    const { user } = useContext(UserContext);

    return (
        <>
        { user ?
            <p>Welcome {user.first_name} {user.last_name}</p>
            : null }
        </>
    )
}

export default HomePage;