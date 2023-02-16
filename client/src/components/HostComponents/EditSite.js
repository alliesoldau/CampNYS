import React, { useContext, useState } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import { EditSiteInfo } from '../Stores/Fetches'
import SiteCard from '../../styles/SiteCard'
import Form from '../../styles/Form'
import arrow from '../../images/back_arrow.png'
import ArrowHeader from '../../styles/ArrowHeader'
import { GiCampingTent } from 'react-icons/gi'
import { MdHouseSiding } from 'react-icons/md'
import { GiTable } from 'react-icons/gi'
import { GiWoodCabin } from 'react-icons/gi'
import { GiMushroomHouse } from 'react-icons/gi'
import Alert from '@mui/material/Alert';

// TO DO: make it so editing and adding sites doesnt crash it. mapping issue 
// TO DO: make sure sign up works and has error handling 

function EditSite() {

    const history = useHistory()

    const { user, setUser } = useContext(UserContext)
    const [ errors, setErrors ] = useState([])
    const params = useParams()

    const campground = user.campgrounds.find((cg) => { return ( cg.id === parseInt(params.CGID) ) })
    console.log('campground', campground)
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
        EditSiteInfo(formData).then(res => {
            if(res.ok) {
                res.json()
                .then((siteData) => {
                    const updatedSites = campground.sites.map((site) => site.id === thisSite.id ? siteData : site)
                    console.log('updated sites', updatedSites)
                    const updatedCGSites = {...campground, sites: updatedSites}
                    const updatedCG = user.campgrounds.map((cg) => cg.id === campground.id? updatedCGSites : cg)
                    const updatedUser = {...user, campgrounds: updatedCG}
                    // console.log(updatedUser)
                    setUser(updatedUser)
                    setErrors([])
                    history.push(`/campground/${campground.id}/sites`)
                })
            } else {
                res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
        })
    }


    return (
        <>
        <div className="errors">
            { errors ? errors.map(e => <Alert severity="error">{`${e.toUpperCase()}`}</Alert>):null} 
        </div>
        { campground && user ? 
        <>
            <ArrowHeader>
                <div className="header">
                    <div className="top">
                        <Link to={`/campground/${campground.id}/sites`}>
                            <img className="arrow" src={arrow}></img>
                        </Link>
                        <h1>Back to Sites Summary</h1>
                    </div>
                    <h3>Edit {thisSite.name}</h3>
                </div>
            </ArrowHeader>
            <SiteCard>
            <div className="add-card">
                <div className="top">
                    <div className="left-container">
                        <form>
                            <Form>
                            <div className="line-item">
                                <label>Camper Capacity</label>
                                <input className="shrink" type='text' name='capacity' value={capacity} onChange={handleChange} />
                            </div>

                            <div className="line-item">
                                <label>Car Capacity</label>
                                <input className="shrink" type='text' name='car_capacity' value={car_capacity} onChange={handleChange} />
                            </div>

                            <div className="line-item">
                            <label>Category</label>
                                <select
                                    onChange={handleChange}
                                    name='category' 
                                    defaultValue={category}
                                    >
                                        <option value='Tent' name='category'>Tent</option>
                                        <option value='Cabin' name='category'>Cabin</option>
                                        <option value='Lean-to' name='category'>Lean-to</option>
                                        <option value='Elevated surface' name='category'>Elevated surface</option>
                                        <option value='Mushroom shelter' name='category'>Mushroom shelter</option>
                                </select>
                            </div>

                            </Form> 
                        </form>
                    </div>
                    <div className="right-container">
                        { category === 'Tent' ? 
                            <h2><GiCampingTent /></h2>
                            : null }
                        { category === 'Lean-to' ?
                            <h2><MdHouseSiding /></h2> 
                            : null }
                        { category === 'Elevated surface' ? 
                            <h2><GiTable /></h2>
                            : null }
                        { category === 'Cabin' ?
                            <h2><GiWoodCabin /></h2>
                            : null }
                        { category === 'Mushroom shelter' ?
                            <h2><GiMushroomHouse /></h2>
                            : null }
                    </div>  
                </div>

                <div className="buttons">
                    <button className="submit" type='submit' onClick={handleSubmit}>Submit Edits</button>
                </div>

            </div>
            </SiteCard> 

            </> : null }
        </>
    )
}

export default EditSite;