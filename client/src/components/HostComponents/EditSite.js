import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import { EditSiteInfo } from '../Stores/Fetches'

function EditSite() {

    const history = useHistory()

    const { user, setUser } = useContext(UserContext)
    const params = useParams()

    const campground = user.campgrounds.find((cg) => { return ( cg.id === parseInt(params.CGID) ) })
    const thisSite = campground.sites.find((cgSite) => { return ( cgSite.id === parseInt(params.siteID)) })

    const [formData, setFormData] = useState({
        id: thisSite.id,
        car_capacity: thisSite.car_capacity,
        capacity: thisSite.capacity,
        category: thisSite.category
    })

    const { car_capacity, capacity, category } = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        EditSiteInfo(formData).then((siteData) => {
            const updatedSites = campground.sites.map((site) => site.id === thisSite.id? siteData : site)
            const updatedCGSites = {...campground, sites: updatedSites}
            const updatedCG = user.campgrounds.map((cg) => cg.id === campground.id? updatedCGSites : cg)
            const updatedUser = {...user, campgrounds: updatedCG}
            setUser(updatedUser)
            history.push(`/campground/${campground.id}/sites`)
        })
    }


    return (
        <>
        { campground ? 
        <>
            <p>Edit Site </p>
            <p>campground name: {campground.name}</p>
            <p>Edit Site</p>
                <form onSubmit={handleSubmit}>
                    <label>Camper Capacity</label>
                        <input type='text' name='capacity' value={capacity} onChange={handleChange} />

                    <label>Car Capacity</label>
                        <input type='text' name='car_capacity' value={car_capacity} onChange={handleChange} />

                    <label>Category</label>
                        <select
                            onChange={handleChange}
                            name='category' 
                            value={category} >
                                <option>Tent</option>
                                <option>Cabin</option>
                                <option>Lean-to</option>
                                <option>Elevated surface</option>
                                <option>Mushroom shelter</option>
                        </select>

                    <button type='submit'>Submit Edits</button>
            </form>
            </> : null }
        </>
    )
}

export default EditSite;