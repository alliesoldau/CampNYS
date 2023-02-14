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

function Sites({ site }) {

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
                        <h3>Site name: {thisSite.name} </h3>
                        <h3>Site category: {thisSite.category}</h3>
                        <h3>Site capacity: {thisSite.capacity}</h3>
                        <h3>Site car capactiy: {thisSite.car_capacity}</h3>
                    </div>
                    <div className="right-container">
                        { thisSite.category === 'Tent' ? 
                            <h2><GiCampingTent /></h2>
                            : null }
                        { thisSite.category === 'Lean-to' ?
                            <h2><MdHouseSiding /></h2> 
                            : null }
                        { thisSite.category === 'Elevated surface' ? 
                            <h2><GiTable /></h2>
                            : null }
                        { thisSite.category === 'Cabin' ?
                            <h2><GiWoodCabin /></h2>
                            : null }
                        { thisSite.category === 'Mushroom shelter' ?
                            <h2><GiMushroomHouse /></h2>
                            : null }
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