import React, { useContext, useState } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom'
import { AddNewSite } from '../Stores/Fetches';
import { UserContext } from '../Context/UserContext'
import SiteCard from '../../styles/SiteCard'
import Form from '../../styles/Form'
import arrow from '../../images/back_arrow.png'
import ArrowHeader from '../../styles/ArrowHeader'
import { GiCampingTent } from 'react-icons/gi'
import { MdHouseSiding } from 'react-icons/md'
import { GiTable } from 'react-icons/gi'
import { GiWoodCabin } from 'react-icons/gi'
import { GiMushroomHouse } from 'react-icons/gi'

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
            <ArrowHeader>
                <div className="header">
                    <div className="top">
                        <Link to={`/campground/${campground.id}/sites`}>
                            <img className="arrow" src={arrow}></img>
                        </Link>
                        <h1>Back to Sites Summary</h1>
                    </div>
                    <h3>Add Sites to {campground.name}</h3>
                </div>
            </ArrowHeader>
            <SiteCard>
            <div className="add-card">
                <div className="top">
                    <div className="left-container">
                        <form>
                        <Form>
                            <div className="line-item">
                                <label>Site Name</label>
                                <input className='shrink-some' type='text' name='name' value={name} onChange={handleChange} />
                            </div>

                            <div className="line-item">
                                <label>Person Capacity</label>
                                <input className="shrink" type='number' min={0} name='capacity' value={capacity} onChange={handleChange} />
                            </div>

                            <div className="line-item">
                                <label>Car Capacity</label>
                                <input className="shrink" type='number' min={0} name='car_capacity' value={car_capacity} onChange={handleChange} />
                            </div>

                            <div className="line-item">
                            <label>Category</label>
                                <select
                                    onChange={handleChange}
                                    name='category' 
                                    defaultValue='Select'
                                    >
                                        <option value='Select' disabled>Select</option>
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
                    <button className="submit" type='submit' onSubmit={handleSubmit}>Submit Edits</button>
                </div>

            </div>
            </SiteCard> 
            </> : null }
        </>
    )
}

export default AddSite;