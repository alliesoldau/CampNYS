import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ResForm() {

    // date picker source: https://www.npmjs.com/package/react-datepicker 
// https://reactdatepicker.com/

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(null)
    const [startDateFormatted, setStartDateFormatted] = useState(null)
    const [endDateFormatted, setEndDateFormatted] = useState(null)

    const onChange = (dates) => {
        const [start, end] = dates
        setStartDate(start)
        setEndDate(end)
    }

    function handleClick() {
        const sDate = `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()}`
        setStartDateFormatted(sDate)
        const eDate = `${endDate.getFullYear()}-${endDate.getMonth()}-${endDate.getDate()}`
        setEndDateFormatted(eDate)
        console.log(sDate)
        console.log(eDate)
    }
    return (
        <>
        <button onClick={handleClick}>Format Dates</button>
        <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
            selectsRange
            selectsDisabledDaysInRange
            inline

        // filter daays --> use this to block out days that there is no availabililty? 
        // () => {
        //     const [startDate, setStartDate] = useState(null);
        //     const isWeekday = (date) => {
        //       const day = getDay(date);
        //       return day !== 0 && day !== 6;
        //     };
        //     return (
        //       <DatePicker
        //         selected={startDate}
        //         onChange={(date) => setStartDate(date)}
        //         filterDate={isWeekday}
        //         placeholderText="Select a weekday"
        //       />
        //     );
        //   };
      />
      </>
    )
}

export default ResForm;