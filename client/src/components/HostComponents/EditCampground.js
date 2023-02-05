import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom"
// import { UserContext } from '../Context/UserContext'
import { CampgroundDetailsContext } from '../Context/CampgroundDetailsContext'
import { EditCampgroundInfo } from '../Stores/Fetches'

function EditCampground() {

    // const { user, setUser } = useContext(UserContext);
    const { campgroundDetails, setCampgroundDetails } = useContext(CampgroundDetailsContext)

    const history = useHistory()

    const [formData, setFormData] = useState({
        id: campgroundDetails.id,
        name: campgroundDetails.name,
        openning_date: campgroundDetails.openning_date,
        closing_date: campgroundDetails.closing_date,
        accessibility: campgroundDetails.accessibility,
        image_url: campgroundDetails.image_url
    })

    const {id, name, openning_date, closing_date, accessibility, image_url} = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
     
    function handleSubmit(e) {
        e.preventDefault();
        // setCampgroundDetails(formData)
        EditCampgroundInfo(formData).then(setCampgroundDetails)
        history.push(`/host/campground/${campgroundDetails.id}`)
    }

    return (
        <>
            <p>Edit Campground</p>
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                        <input type='text' name='name' value={name} onChange={handleChange} />

                    <label>Opening Date</label>
                        <input type='text' name='openning_date' value={openning_date} onChange={handleChange} />

                    <label>Closing Date</label>
                        <input type='text' name='closing_date' value={closing_date} onChange={handleChange} />

                    <label>Accessibility</label>
                        <input type='text' name='accessibility' value={accessibility} onChange={handleChange} />
                        
                    <label>Image URL</label>
                        <input type='text' name='image_url' value={image_url} onChange={handleChange} />

                    <button type='submit'>Submit Edits</button>
            </form>
        </>
    )
}

export default EditCampground;