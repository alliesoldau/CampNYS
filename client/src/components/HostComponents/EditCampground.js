import React, { useContext, useState } from 'react';
import { useHistory, useParams, Link } from "react-router-dom"
import { UserContext } from '../Context/UserContext'
import { EditCampgroundInfo } from '../Stores/Fetches'
import CGDetailsCard from '../../styles/CGDetailsCard'
import arrow from '../../images/back_arrow.png'
import Form from '../../styles/Form'
import ArrowHeader from '../../styles/ArrowHeader'
import Alert from '@mui/material/Alert';

function EditCampground() {

    const { user, setUser } = useContext(UserContext)
    const [ errors, setErrors ] = useState([])
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
        EditCampgroundInfo(formData).then(res => {
            if(res.ok){
                res.json().then((updatedCG) => {
                const updatedCampgrounds = user.campgrounds.map((cg) => cg.id === campground.id ? updatedCG : cg)
                const updatedUser = {...user, campgrounds: updatedCampgrounds}
                setUser(updatedUser)
                setErrors([])
                history.push(`/host/campground/${campground.id}`)
                })
            } else {
                res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
        })
    }

    return (
        <CGDetailsCard>
        <div className="errors">
            { errors ? errors.map(e => <Alert severity="error">{`${e.toUpperCase()}`}</Alert>) : null} 
        </div>
        { user ? <>
            <ArrowHeader>
                <div className="top">
                    <Link to={`/hosts/${campground.host_id}/campgrounds`}>
                        <img className="arrow" src={arrow}></img>
                    </Link>
                    <h1>Edit Campground</h1>
                </div>
            </ArrowHeader>
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
                                    <select
                                        onChange={handleChange}
                                        name='accessibility' 
                                        defaultValue={accessibility}
                                        >
                                        <option value='Hike-in' name='accessibility'>Hike-in</option>
                                        <option value='Road' name='accessibility'>Road</option>
                                        <option value='Boat' name='accessibility'>Boat</option>
                                    </select>
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