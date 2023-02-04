import React, { useContext, useEffect } from 'react';
import { UserContext } from '../Context/UserContext'
import { HostCampgroundsContext } from '../Context/HostCampgroundsContext'
import { GrabHostCampgrounds } from '../Stores/Fetches'
import Campgrounds from './Campgrounds'

function HostCampgrounds() {

    const { hostCampgrounds, setHostCampgrounds} = useContext(HostCampgroundsContext)
    const { user } = useContext(UserContext)

    useEffect(() => {
        GrabHostCampgrounds(user.id).then(setHostCampgrounds)
    },[])

    const campgrounds = hostCampgrounds.map((cg) => {
        return(
            <Campgrounds 
                key={cg.id}
                cg={cg}
            />
        )
    })

    return (
        <>
            <p>Host Campgrounds</p>
            { campgrounds }
        </>
    )
}

export default HostCampgrounds;