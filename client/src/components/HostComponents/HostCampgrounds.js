import React, { useContext, useEffect } from 'react'
import { UserContext } from '../Context/UserContext'
import { HostCampgroundsContext } from '../Context/HostCampgroundsContext'
import { CampgroundDetailsProvider } from '../Context/CampgroundDetailsContext'
import { GrabHostCampgrounds } from '../Stores/Fetches'
import Campgrounds from './Campgrounds'

function HostCampgrounds() {

    const { hostCampgrounds, setHostCampgrounds} = useContext(HostCampgroundsContext)
    const { user } = useContext(UserContext)

    useEffect(() => {
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
        // <CampgroundDetailsProvider>
            <>
                <p>Host Campgrounds</p>
                { campgrounds }
            </>
        // </CampgroundDetailsProvider>
    )
}

export default HostCampgrounds;