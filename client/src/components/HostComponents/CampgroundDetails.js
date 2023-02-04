import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { CampgroundDetailsContext } from '../Context/CampgroundDetailsContext'
import { HostCampgroundsContext } from '../Context/HostCampgroundsContext'
import { DeleteCampground } from '../Stores/Fetches'

function CampgroundDetails() {

    const { campgroundDetails } = useContext(CampgroundDetailsContext)
    const { hostCampgrounds, setHostCampgrounds} = useContext(HostCampgroundsContext)

    const history = useHistory()

    function handleDelete() {
        DeleteCampground(campgroundDetails.id)
        const campgroundsSansDelete = hostCampgrounds.filter((cg) => cg.id !== campgroundDetails.id)
        setHostCampgrounds(campgroundsSansDelete)
        history.push(`/hosts/${campgroundDetails.host_id}/campgrounds`)
    }

    return (
        <>
            <p>campground details</p>
            <p>name: {campgroundDetails.name}</p>
            <button onClick={handleDelete}>Delete Campground</button>
        </>
    )
}

export default CampgroundDetails;