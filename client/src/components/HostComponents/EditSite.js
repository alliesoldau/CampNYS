import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom'
// import { CampgroundDetailsContext } from '../Context/CampgroundDetailsContext'
import { CampgroundContext } from '../Context/CampgroundContext'
import { SiteContext } from '../Context/SiteContext'
import { EditSiteInfo } from '../Stores/Fetches'

function EditSite() {

    const history = useHistory()

    const { siteDetails, setSiteDetails } = useContext(SiteContext)

    const { campgrounds } = useContext(CampgroundContext)

    const myCampground = (campgrounds.find((campground) => campground.id === siteDetails.campground_id))

    const [formData, setFormData] = useState({
        id: siteDetails.id,
        car_capacity: siteDetails.car_capacity,
        capacity: siteDetails.capacity,
        category: siteDetails.category
    })

    const { id, car_capacity, capacity, category } = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData.id)
        EditSiteInfo(formData).then((siteData) => {
            setSiteDetails(siteData)
            history.push(`/site/${siteData.id}`)
            // TO DO: make it persist on refresh
            // make the data up the chain persist on refresh as well
    })
    }


    return (
        <>
        { myCampground ? 
        <>
            <p>Edit Site </p>
            <p>campground name: {myCampground.name}</p>
            <p>Edit Site</p>
                <form onSubmit={handleSubmit}>
                    <label>Camper Capacity</label>
                        <input type='text' name='capacity' value={capacity} onChange={handleChange} />

                    <label>Car Capacity</label>
                        <input type='text' name='car_capacity' value={car_capacity} onChange={handleChange} />

                    <label>Category</label>
                        <input type='text' name='category' value={category} onChange={handleChange} />

                    <button type='submit'>Submit Edits</button>
            </form>
            </> : null }
        </>
    )
}

export default EditSite;