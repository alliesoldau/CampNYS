import React, { useState, useContext } from 'react';
import { UserContext } from '../../Context/UserContext'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ResForm({ selectedSite, campground }) {

    // date picker source: https://www.npmjs.com/package/react-datepicker 
    // https://reactdatepicker.com/

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(null)
    // const [startDateFormatted, setStartDateFormatted] = useState(null)
    // const [endDateFormatted, setEndDateFormatted] = useState(null)
    const { user } = useContext(UserContext)

    const onChange = (dates) => {
        const [start, end] = dates
        setStartDate(start)
        setEndDate(end)
        // const sDate = `${start.getFullYear()}-${start.getMonth()}-${start.getDate()}`
        // const eDate = `${end.getFullYear()}-${end.getMonth()}-${end.getDate()}`
        // setFormData({ ...formData, start_date: sDate})
        // setFormData({ ...formData, end_date: eDate})
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
        host_id: campground.id
    })

    const { number_of_people, start_date, end_date, cars, site_id, camper_id, host_id } = formData

    function handleClick() {
        const sDate = `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()}`
        const eDate = `${endDate.getFullYear()}-${endDate.getMonth()}-${endDate.getDate()}`
        setFormData({ ...formData, start_date: sDate, end_date: eDate })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    return (
        <>
        { selectedSite && campground ? 
            <> 
            <form>
                <p>site name: {selectedSite.name} </p>
                <p>site category: {selectedSite.category}</p>
                <label>Number of People, max {selectedSite.capacity}</label>
                    <input type='text' name='number_of_people' value={number_of_people} onChange={handleChange} />
                    
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
                    <input type='text' name='cars' value={cars} onChange={handleChange} />
                

            </form>

            <button onClick={handleClick}>Format Dates</button>
            <button onClick={logFormData}>Log Form Data</button>
            <button type='submit'>Submit Edits</button>
    
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