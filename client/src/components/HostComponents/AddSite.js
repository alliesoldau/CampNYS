import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { AddNewSite } from '../Stores/Fetches';
import { UserContext } from '../Context/UserContext'

function AddSite() {
    const history = useHistory()
    const { user, setUser } = useContext(UserContext)
    const params = useParams()

    const [formData, setFormData] = useState({
        name: '',
        capacity: null,
        category: '',
        car_capacity: null,
        campground_id: params.id
    })

    const { name, capacity, category, car_capacity, campground_id } = formData

    let campground
    if (user.campgrounds) {
        campground = user.campgrounds.find((cg) => { return ( cg.id === parseInt(params.id) ) })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData)
        AddNewSite(formData).then((siteData) => {
            const CGSites = campground.sites
            const updatedSites = [...CGSites, siteData]
            const updatedCG = { ...campground, sites: updatedSites }
            const updatedCGs = user.campgrounds.map((cg) => cg.id === updatedCG.id ? updatedCG : cg)
            const updatedUser = { ...user, campgrounds: updatedCGs }
            setUser(updatedUser)
            history.push(`/campground/${campground.id}/sites`)
        })
    }

    return (
        <>
        { user ? 
        <>
            <p>Add Sites </p>
                <form onSubmit={handleSubmit}>
                    <label>Site Name</label>
                        <input type='text' name='name' value={name} onChange={handleChange} />

                    <label>Person Capacity</label>
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

export default AddSite;