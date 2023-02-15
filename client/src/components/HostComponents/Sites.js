import React, { useContext, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import { DeleteSite } from '../Stores/Fetches'
import SiteCard from '../../styles/SiteCard'
import { GiCampingTent } from 'react-icons/gi'
import { MdHouseSiding } from 'react-icons/md'
import { GiTable } from 'react-icons/gi'
import { GiWoodCabin } from 'react-icons/gi'
import { GiMushroomHouse } from 'react-icons/gi'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Sites({ site }) {

    console.log(site)

    const { user, setUser } = useContext(UserContext)
    const [show, setShow] = useState(false)
    const [deleteMe, setDeleteMe] = useState(null)

    const history = useHistory()

    const campground = user.campgrounds.find((cg) => { return ( cg.id === site.campground_id ) })
    const thisSite = campground.sites.find((cgSite) => { return ( cgSite.id === site.id) })

    function handleSiteDelete(e) {
        e.preventDefault();
        const sitesSansDelete = campground.sites.filter((site) => site.id !== thisSite.id)
        const updatedSites = {...campground, sites: sitesSansDelete}
        const updatedCG = user.campgrounds.map((cg) => cg.id === campground.id? updatedSites : cg)
        const updatedUser = {...user, campgrounds: updatedCG}
        setUser(updatedUser)
        history.push(`/campground/${campground.id}/sites`)
        DeleteSite(thisSite.id)
    }

    function handleDelete() {
        setShow(false)
        handleSiteDelete(deleteMe)
    }

    function handleClose() {
        setShow(false)
    }

    function handleShow(res) {
        setShow(true)
        setDeleteMe(res)
    }

    // filter out days that are already booked  
    // i have to format the start and end date because react date picker handles dates differently
    // then i seeded them into the data  
    const exclude = site.reservations.map((ressy) => {
        // start date 
        const day = (new Date(ressy.start_date).getDate()) + 1
        const month = (new Date(ressy.start_date).getMonth()) + 1
        const year = (new Date(ressy.start_date).getFullYear())
        const dateFormatted = `${year}-${month}-${day}`

        // end date 
        const dayEnd = (new Date(ressy.end_date).getDate()) + 1
        const monthEnd = (new Date(ressy.end_date).getMonth()) + 1
        const yearEnd = (new Date(ressy.end_date).getFullYear())
        const dateFormattedEnd = `${yearEnd}-${monthEnd}-${dayEnd}`

        // get all the dates in the range
        const datesBetween = getDatesBetween(dateFormatted, dateFormattedEnd)

        function getDatesBetween (start, end) {
            const dates = [];
            let currentDate = new Date(start)
            let endDate = new Date(end)
            while (currentDate <= endDate) {
                dates.push(currentDate);
                currentDate = new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    currentDate.getDate() + 1, // Will increase month if over range
                );
            }
            return dates
        }
        return datesBetween       
    })

    return (
        <><Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
            <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this?</Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={handleDelete}>
                Confirm
            </Button>
            <Button variant="secondary" onClick={handleClose}>
                Cancel
            </Button>
        </Modal.Footer>
    </Modal>
        <SiteCard>
            <div className="card">
                <div className="top">
                    <div className="left-container">
                        <div className="line-items"><h3>Site name:</h3><p className="accent">{thisSite.name}</p></div>
                        <div className="line-items"><h3>Site category:</h3><p>{thisSite.category}</p></div>
                        <div className="line-items"><h3>Site capacity:</h3><p>{thisSite.capacity}</p></div>
                        <div className="line-items"><h3>Site car capactiy:</h3><p>{thisSite.car_capacity}</p></div>
                        { thisSite.category === 'Tent' ? 
                            <h2 className="big"><GiCampingTent /></h2>
                            : null }
                        { thisSite.category === 'Lean-to' ?
                            <h2 className="big"><MdHouseSiding /></h2> 
                            : null }
                        { thisSite.category === 'Elevated surface' ? 
                            <h2 className="big"><GiTable /></h2>
                            : null }
                        { thisSite.category === 'Cabin' ?
                            <h2 className="big"><GiWoodCabin /></h2>
                            : null }
                        { thisSite.category === 'Mushroom shelter' ?
                            <h2 className="big"><GiMushroomHouse /></h2>
                            : null }
                    </div>
                    <div className="calendar-container">
                        <DatePicker
                            excludeDates={exclude.flat()}
                            minDate={new Date()}
                            selectsRange
                            inline
                        />
                    </div>
                </div>
                <div className="buttons">
                    <Link to={`/campgrounds/${campground.id}/site/${thisSite.id}/edit`}>
                        <button className="edit">Edit Site Details</button>
                    </Link>
                        <button className="delete" onClick={handleShow}>Delete Site</button>
                </div>
            </div>
        </SiteCard>
        </>
    )
}

export default Sites;