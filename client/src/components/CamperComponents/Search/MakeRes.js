import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { CampgroundContext } from '../../Context/CampgroundContext'
import ResSites from './ResSites'

function MakeRes() {

    const params = useParams()
    const { user } = useContext(UserContext)
    const { campgrounds } = useContext(CampgroundContext)
    const [selectedSite, setSelectedSite] = useState(null)

    let campground
    if (user && campgrounds) {
        campground = campgrounds.find((cg) => { return ( cg.id === parseInt(params.id) ) })
    }

    return (
        <>
        { user && campground.sites ? 
        <>
            <p>Make Res</p>
            <p>Campground: {campground.name}</p>
            { selectedSite ? <>
                <p>selected site name: {selectedSite.name}</p>
                <p>put reservation form here</p>
            </> : null }
            { campground.sites && campground.sites.length > 0 ? 
                <>
                {campground.sites.map((resSite) => {
                return(
                    <ResSites 
                        key={resSite.id}
                        resSite={resSite}
                        setSelectedSite={setSelectedSite}
                    />
                    )
                })}
                </> : null }
        </> 
        : null }
        </>
    )
}

export default MakeRes;