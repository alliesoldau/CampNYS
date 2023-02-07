import React, { useContext, useState } from 'react';
import { useHistory, useParams } from "react-router-dom"
import { UserContext } from '../Context/UserContext'
import { EditCampgroundInfo } from '../Stores/Fetches'

function EditCampground() {

    const { user, setUser } = useContext(UserContext)
    const params = useParams()
    const history = useHistory()

    const campground = user.campgrounds.find((cg) => { return ( cg.id === parseInt(params.id) ) })

    const [formData, setFormData] = useState({
        id: campground.id,
        name: campground.name,
        openning_date: campground.openning_date,
        closing_date: campground.closing_date,
        accessibility: campground.accessibility,
        image_url: campground.image_url
    })

    const {id, name, openning_date, closing_date, accessibility, image_url} = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
     
    function handleSubmit(e) {
        e.preventDefault();
        EditCampgroundInfo(formData).then((updatedCG) => {
            const updatedCampgrounds = user.campgrounds.map((cg) => cg.id === campground.id ? updatedCG : cg)
            const updatedUser = {...user, campgrounds: updatedCampgrounds}
            setUser(updatedUser)

        })
        history.push(`/host/campground/${campground.id}`)
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