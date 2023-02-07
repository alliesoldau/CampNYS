import React, { useState } from 'react';
// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// date picker source: https://www.npmjs.com/package/react-datepicker 
// https://reactdatepicker.com/

function MapFilters() {

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(null)
    const onChange = (dates) => {
        const [start, end] = dates
        setStartDate(start)
        setEndDate(end)
    }
    console.log(startDate)
    console.log(endDate)

    return (
        <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        minDate={new Date()}

        // excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
        selectsRange
        selectsDisabledDaysInRange
        inline
      />
    )
}

export default MapFilters;