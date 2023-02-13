import React, { useContext, useState } from 'react';
import { useHistory, Link } from 'react-router-dom'
import { AddNewCampground } from '../Stores/Fetches';
import { UserContext } from '../Context/UserContext'
import CGDetailsCard from '../../styles/CGDetailsCard'
import ArrowHeader from '../../styles/ArrowHeader'
import Form from '../../styles/Form'
import arrow from '../../images/back_arrow.png'
import { MdDirectionsWalk } from 'react-icons/md'
import { IoMdBoat } from 'react-icons/io'
import { AiFillCar } from 'react-icons/ai'
import Alert from '@mui/material/Alert';
// import { ErrorsContext } from '../Context/ErrorsContext'

function AddCampground() {

    const history = useHistory()
    const { user, setUser } = useContext(UserContext)
    const [ errors, setErrors ] = useState([])

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

    const { name, lat, lng, openning_date, closing_date, accessibility, region_id, image_url } = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        AddNewCampground(formData).then(res => {
            if(res.ok){
                res.json()
                .then((data) => {
                    const hostsCampgrounds = user.campgrounds
                    const updateCGs = [...hostsCampgrounds, data]
                    const updatedUser = {...user, campgrounds: updateCGs}
                    setUser(updatedUser)
                    setErrors([])
                    history.push(`/hosts/${updatedUser.id}/campgrounds`)
                })
            } else {
                res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
        })
        
    }

    return (
        <>
        { user ? 
        <> 
        <div className="errors">
            { errors ? errors.map(e => <Alert severity="error">{`${e.toUpperCase()}`}</Alert>):null} 
        </div>
        <CGDetailsCard>
            <ArrowHeader>
                <div className="top">
                    <Link to={`/hosts/${user.id}/campgrounds`}>
                        <img className="arrow" src={arrow}></img>
                    </Link>
                    <h1>Back to All Campgrounds</h1>
                </div>
                <h3>Add a Campground</h3>
            </ArrowHeader>
            
            <div className="card">
                <div className="left-container">
                    <div className="text">
                <form onSubmit={handleSubmit}>
                    <Form>
                    <div className="line-item">
                    <label>Campground Name</label>
                        <input type='text' name='name' value={name} onChange={handleChange} />
                    </div>

                    <div className="line-item">
                    <label>Lattitude</label>
                        <input type='text' name='lat' value={lat} onChange={handleChange} />
                    </div>

                    <div className="line-item">
                    <label>Longitude</label>
                        <input type='text' name='lng' value={lng} onChange={handleChange} />
                    </div>

                    <div className="line-item">
                    <label>Opening Date</label>
                        <input type='date' name='openning_date' value={openning_date} onChange={handleChange} />
                    </div>

                    <div className="line-item">
                    <label>Closing Date</label>
                        <input type='date' min={openning_date} name='closing_date' value={closing_date} onChange={handleChange} />
                    </div>

                    <div className="line-item">
                    <label>Accessibility</label>
                        <select
                            onChange={handleChange}
                            name='accessibility' 
                            defaultValue='Select'
                            >
                                <option value='Select' disabled>Select</option>
                                <option value='Hike-in' name='accessibility'>Hike-in</option>
                                <option value='Road' name='accessibility'>Road</option>
                                <option value='Boat' name='accessibility'>Boat</option>
                        </select>
                    </div>

                    <div className="line-item">
                    <label>Region</label>
                        <select
                            onChange={handleChange}
                            name='region_id' 
                            defaultValue='Select'
                            >
                                <option value='Select' disabled>Select</option>
                                <option value='1' name='region_id'>High Peaks Region</option>
                                <option value='2' name='region_id'>Lake George</option>
                                <option value='3' name='region_id'>North Daks</option>
                                <option value='4' name='region_id'>Catskills</option>
                        </select>
                    </div>

                    <div className="line-item">
                    <label>Image URL</label>
                        <input type='image_url' name='image_url' value={image_url} onChange={handleChange} />
                    </div>

                    <div className="buttons">
                        <button className='submit' type='submit'>Submit</button>
                    </div>
                    </Form>
                </form>
            </div>
        </div>
        <div className="right-container">
            { accessibility !=='' ? 
            <div className="icon">
                { accessibility==='Hike-in' ? 
                    <MdDirectionsWalk/>
                : null }
                { accessibility==='Boat' ?
                    <IoMdBoat/>
                : null }
                { accessibility==='Road' ? 
                    <AiFillCar/>
                : null }
            </div>
            : null }
        </div>
        </div>
        </CGDetailsCard> 
        </>
        : null }
        </>
    )
}

export default AddCampground;