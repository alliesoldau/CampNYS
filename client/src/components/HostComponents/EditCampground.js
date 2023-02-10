import React, { useContext, useState } from 'react';
import { useHistory, useParams, Link } from "react-router-dom"
import { UserContext } from '../Context/UserContext'
import { EditCampgroundInfo } from '../Stores/Fetches'
import CGDetailsCard from '../../styles/CGDetailsCard'
import arrow from '../../images/back_arrow.png'
import Form from '../../styles/Form'

function EditCampground() {

    const { user, setUser } = useContext(UserContext)
    const params = useParams()
    const history = useHistory()

    let campground
    if (user) {
        campground = user.campgrounds.find((cg) => { return ( cg.id === parseInt(params.id) ) })
    }

    const [formData, setFormData] = useState({
        id: campground.id,
        name: campground.name,
        openning_date: campground.openning_date,
        closing_date: campground.closing_date,
        accessibility: campground.accessibility,
        image_url: campground.image_url
    })

    const {name, openning_date, closing_date, accessibility, image_url} = formData

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
        <CGDetailsCard>
        { user ? <>
            <div className="header">
                <Link to={`/hosts/${campground.host_id}/campgrounds`}>
                    <img className="arrow" src={arrow}></img>
                </Link>
                <h1>Edit Campground</h1>
            </div>
            <div className="card">
                <div className="left-container">
                    <div className="text">
                        <h4>{campground.name}</h4>
                        <form onSubmit={handleSubmit}>
                            <Form>
                                <div className="line-item">
                                        <label>Name</label>
                                        <input type='text' name='name' value={name} onChange={handleChange} />
                                </div>
                                <div className="line-item">
                                        <label>Opening Date</label>
                                        <input type='text' name='openning_date' value={openning_date} onChange={handleChange} />
                                </div>
                                <div className="line-item">
                                    <label>Closing Date</label>
                                    <input type='text' name='closing_date' value={closing_date} onChange={handleChange} />
                                </div>
                                <div className="line-item">
                                    <label>Accessibility</label>
                                    <input type='text' name='accessibility' value={accessibility} onChange={handleChange} />
                                </div>
                                <div className="line-item">
                                    <label>Image URL</label>
                                    <input type='text' name='image_url' value={image_url} onChange={handleChange} />
                                </div>
                            <div className="buttons">
                                <button className="submit" type='submit'>Submit Edits</button>
                            </div>
                            </Form>
                        </form>
                    </div>
                </div>
                <div className="right-container">
                        <img src={campground.image_url}></img>
                    </div>
            </div>
            </> : null }
        </CGDetailsCard>
    )
}

export default EditCampground;