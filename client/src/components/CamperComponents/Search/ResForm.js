import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { CamperReservationsContext } from '../../Context/CamperReservationsContext'
import { CampgroundContext } from '../../Context/CampgroundContext'
import { AddNewRes } from '../../Stores/Fetches'
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

    // this filters out weekends, now to try it with start dates 
    const isAvailable = (date) => {
        // const sDates = selectedSite.reservations.map((site => site.start_date))
        const day = new Date(date).getDay();
        return day !== 0 && day !== 6;
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

    return (
        <>
        { selectedSite && campground ? 
            <> 
            <form onSubmit={handleSubmit}>
                <p>site name: {selectedSite.name} </p>
                <p>site category: {selectedSite.category}</p>
                <label>Number of People, max {selectedSite.capacity}</label>
                    <input type='number' min={0} max={selectedSite.capacity} name='number_of_people' value={number_of_people} onChange={handleChange} />
                    
                <label>Date Range</label>
                <DatePicker
                    selected={startDate}
                    onChange={onChange}
                    startDate={startDate}
                    endDate={endDate}
                    filterDate={isAvailable}
                    minDate={new Date()}
                    selectsRange
                    selectsDisabledDaysInRange
                    inline
                />

                <label>Number of Cars, max {selectedSite.car_capacity}</label>
                    <input type='number' min={0} max={selectedSite.car_capacity} name='cars' value={cars} onChange={handleChange} />
                   
                <button type='submit'>Submit Edits</button>

            </form>
    
                {/* TO DO: filter out days that already have a reservation  */}
                {/* filter days --> use this to block out days that there is no availabililty? 
                () => {
                    const [startDate, setStartDate] = useState(null);
                    const isWeekday = (date) => {
                      const day = getDay(date);
                      return day !== 0 && day !== 6;
                    };
                    return (
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        filterDate={isWeekday}
                        placeholderText="Select a weekday"
                      />
                    );
                  };
             */}
            </> : null }
      </>
    )
}

export default ResForm;