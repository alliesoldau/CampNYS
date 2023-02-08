import React, { useState, useContext } from 'react';
import { UserContext } from '../../Context/UserContext'
import { AddNewRes } from '../../Stores/Fetches'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ResForm({ selectedSite, campground }) {

    // date picker source: https://www.npmjs.com/package/react-datepicker 
    // https://reactdatepicker.com/

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(null)
    const { user } = useContext(UserContext)

    const onChange = (dates) => {
        const [start, end] = dates
        setStartDate(start)
        setEndDate(end)
        // TO DO: figure out how to do all of the date formatting on change so that  idont need to seperately format 
    }

    function logFormData() {
        console.log(formData)
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

    function handleClick(e) {
        e.preventDefault()
        const sDate = `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()}`
        const eDate = `${endDate.getFullYear()}-${endDate.getMonth()}-${endDate.getDate()}`
        setFormData({ ...formData, start_date: sDate, end_date: eDate })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        AddNewRes(formData).then((data) => {
            console.log(data)
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
                    minDate={new Date()}
                    selectsRange
                    selectsDisabledDaysInRange
                    inline
                />

                <label>Number of Cars, max {selectedSite.car_capacity}</label>
                    <input type='number' min={0} max={selectedSite.car_capacity} name='cars' value={cars} onChange={handleChange} />
                   
                <button onClick={handleClick}>Format Dates</button>
                <button type='submit'>Submit Edits</button>

            </form>
    
                {/* TO DO: filter out days that already have a reservation  */}
                {/* filter daays --> use this to block out days that there is no availabililty? 
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