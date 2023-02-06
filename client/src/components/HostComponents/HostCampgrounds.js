import React, { useContext, useEffect } from 'react'
import { HostCampgroundsContext } from '../Context/HostCampgroundsContext'
import Campgrounds from './Campgrounds'

function HostCampgrounds() {

    const { hostCampgrounds } = useContext(HostCampgroundsContext)

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