import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom'
import { AddNewCampground } from '../Stores/Fetches';
import { UserContext } from '../Context/UserContext'

function AddCampground() {

    const history = useHistory()
    const { user, setUser } = useContext(UserContext)

    const [formData, setFormData] = useState({
        name: '',
        lat: null,
        lng: null,
        openning_date: null,
        closing_date: null,
        accessibility: '',
        region_id: null,
        host_id: user.id,
        image_url: ''
    })

    const { name, lat, lng, openning_date, closing_date, accessibility, region_id, host_id, image_url } = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        // the post works but now i need to persist it to the front end and update the user
        AddNewCampground(formData).then((data) => {
            const hostsCampgrounds = user.campgrounds
            const updateCGs = [...hostsCampgrounds, data]
            const updatedUser = {...user, campgrounds: updateCGs}
            setUser(updatedUser)
            history.push(`/hosts/${updatedUser.id}/campgrounds`)
        })
    }

    return (
        <>
        { user ? 
        <>
            <p>Add Campgrond </p>
                <form onSubmit={handleSubmit}>
                    <label>Campground Name</label>
                        <input type='text' name='name' value={name} onChange={handleChange} />

                    <label>Lattitude</label>
                        <input type='text' name='lat' value={lat} onChange={handleChange} />

                    <label>Longitude</label>
                        <input type='text' name='lng' value={lng} onChange={handleChange} />
                    
                    <label>Opening Date</label>
                        <input type='date' name='openning_date' value={openning_date} onChange={handleChange} />

                    <label>Closing Date</label>
                    {/* TO DO: make this after opening date  */}
                        <input type='date' name='closing_date' value={closing_date} onChange={handleChange} />

                    <label>Accessibility</label>
                    {/* TO DO: turn to drop down  */}
                        <input type='text' name='accessibility' value={accessibility} onChange={handleChange} />
                    
                    <label>Region ID</label>
                    {/* TO DO: turn to drop down  */}
                        <input type='text' name='region_id' value={region_id} onChange={handleChange} />

                    <label>Image URL</label>
                        <input type='image_url' name='image_url' value={image_url} onChange={handleChange} />

                    <button type='submit'>Submit Edits</button>
            </form>
            </> : null }
        </>
    )
}

export default AddCampground;