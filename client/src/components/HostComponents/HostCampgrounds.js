import React, { useContext, useEffect } from 'react'
import { UserContext } from '../Context/UserContext'
import { HostCampgroundsContext } from '../Context/HostCampgroundsContext'
import { GrabHostCampgrounds } from '../Stores/Fetches'
import Campgrounds from './Campgrounds'

function HostCampgrounds() {

    const { hostCampgrounds, setHostCampgrounds} = useContext(HostCampgroundsContext)
    const { user } = useContext(UserContext)

    useEffect(() => {
        // my fetch is working but it wont render on the front end?? 
        console.log('here')
        GrabHostCampgrounds(user.id).then((d)=> {
            setHostCampgrounds(d)
        })
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
                <p><b>MAKE IT SO YOU CAN ADD A CAMPGROUND!</b></p>
                { campgrounds }
            </>
    )
}

export default HostCampgrounds;