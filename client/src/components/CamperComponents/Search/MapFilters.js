import React, { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

// calendar demo source: https://projects.wojtekmaj.pl/react-calendar/ 

function MapFilters() {

    const [value, onChange] = useState(new Date());
    console.log(value)

    return (
        <>
            <p>Map Filters</p>
            <Calendar 
                onChange={onChange} 
                value={value} 
                selectRange={true}
                minDate={new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())}
            />
        </>
    )
}

export default MapFilters;