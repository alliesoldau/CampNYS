import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import CamperResDetails from './CamperResDetails'
import { CamperReservationsContext } from '../../Context/CamperReservationsContext'
import Reservations from '../../../styles/Reservations'
import { DeleteReservation } from '../../Stores/Fetches'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CamperReservations() {

    const { campRes, setCampRes } = useContext(CamperReservationsContext)
    const [show, setShow] = useState(false)
    const [deleteMe, setDeleteMe] = useState(null)
    const history = useHistory()

    function handleDelete() {
        setShow(false)
        handleDeleteReservation(deleteMe)
    }

    function handleClose() {
        setShow(false)
    }

    function handleShow(res) {
        setShow(true)
        setDeleteMe(res)
    }

    function handleDeleteReservation(res) {
        const resSansDeleted = campRes.filter(reservation => res.id !== reservation.id)
        setCampRes(resSansDeleted)
        history.push(`/campers/${res.camper_id}/reservations`)
        DeleteReservation(res.id)
    }

    // the colors array is used to set the header color of the cards different colors every 4
    const colors = ["red", "teal", "purple", "orange"]
    let count = 0
    const reservations = campRes.map((res) => {
        count = count + 1
        if (count > 4) {
            count = 1
        }
        let color = colors[count - 1]
        return(
            <CamperResDetails 
                key={res.id}
                res={res}
                color={color}
                handleShow={handleShow}
            />
        )
    })

    let reservationMessage = ''
    if (!campRes || campRes.length === 0){
        reservationMessage = "You don't have any reservations..."
    } else if (campRes.length == 1) {
        reservationMessage = "You have 1 reservation..."
    } else {
        reservationMessage = `You have ${campRes.length} reservations...`
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
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
            
            <Reservations>
                <div className="header">
                    { reservationMessage }
                </div>
                <div className="reservation-card-container">
                    { reservations }
                </div>
            </Reservations>
        </>
    )
}

export default CamperReservations;