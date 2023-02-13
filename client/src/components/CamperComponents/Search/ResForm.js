import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { CamperReservationsContext } from '../../Context/CamperReservationsContext'
import { CampgroundContext } from '../../Context/CampgroundContext'
import { AddNewRes } from '../../Stores/Fetches'
import Form from '../../../styles/Form'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ResForm({ selectedSite, campground }) {

    // date picker source: https://www.npmjs.com/package/react-datepicker 
    // https://reactdatepicker.com/

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(null)
    const { user } = useContext(UserContext)
    const { campRes, setCampRes } = useContext(CamperReservationsContext)
    const { campgrounds, setCampgrounds } = useContext(CampgroundContext)
    const history = useHistory()

    const onChange = (dates) => {
        const [start, end] = dates
        setStartDate(start)
        setEndDate(end)
    }

    const [formData, setFormData] = useState({
        number_of_people: null,
        start_date: null,
        end_date: null,
        cars: null,
        site_id: selectedSite.id,
        camper_id: user.id,
        host_id: campground.host_id
    })

    const { number_of_people, cars } = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        const sDate = `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()}`
        const eDate = `${endDate.getFullYear()}-${endDate.getMonth() + 1}-${endDate.getDate()}`
        const formDataWithDate = {...formData, start_date: sDate, end_date: eDate}
        AddNewRes(formDataWithDate).then((resData) => {
            setCampRes([...campRes, resData])
            const updatedRess = [...selectedSite.reservations, resData]
            const updatedSite = {...selectedSite, reservations: updatedRess}
            const updatedSites = campground.sites.map((site) => site.id === selectedSite.id ? updatedSite : site)
            const updatedCG = {...campground, sites: updatedSites }
            const updatedCGs = campgrounds.map((cg) => cg.id === campground.id ? updatedCG : cg)
            setCampgrounds(updatedCGs)
        history.push(`/campers/${user.id}/reservations`)
        })
    }

    // filter out days that are already booked  
    // i have to format the start and end date because react date picker handles dates differently
    // then i seeded them into the data  
    const exclude = selectedSite.reservations.map((site) => {
        // start date 
        const day = (new Date(site.start_date).getDate()) + 1
        const month = (new Date(site.start_date).getMonth()) + 1
        const year = (new Date(site.start_date).getFullYear())
        const dateFormatted = `${year}-${month}-${day}`

        // end date 
        const dayEnd = (new Date(site.end_date).getDate()) + 1
        const monthEnd = (new Date(site.end_date).getMonth()) + 1
        const yearEnd = (new Date(site.end_date).getFullYear())
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
        <>
        { selectedSite && campground ? 
            <Form> 
            <form onSubmit={handleSubmit}>
                <div className="res-form">
                    <div className="left-container">

                    <DatePicker
                        selected={startDate}
                        onChange={onChange}
                        startDate={startDate}
                        endDate={endDate}
                        excludeDates={exclude.flat()}
                        minDate={new Date()}
                        selectsRange
                        selectsDisabledDaysInRange
                        inline
                    />
                    </div>
                    <div className="right-container">
                    <div className="line-item">
                        <label>Number of People, max {selectedSite.capacity}</label>
                        <input type='number' min={0} max={selectedSite.capacity} name='number_of_people' value={number_of_people} onChange={handleChange} />
                    </div>

                    <div className="line-item">
                        <label>Number of Cars, max {selectedSite.car_capacity}</label>
                        <input type='number' min={0} max={selectedSite.car_capacity} name='cars' value={cars} onChange={handleChange} />    
                    </div>

                    <div className="buttons-res-form">
                        <button className="res-form-submit" type='submit'>Make Reservation</button>
                    </div>

                    </div>
                </div>
            </form>                
            </Form> : null }
      </>
    )
}

export default ResForm;