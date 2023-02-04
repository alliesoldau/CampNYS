import React from 'react';

function Campgrounds({ cg }) {
    return (
        <>
            <p>campground name: {cg.name} </p>
            <p>openning date: {cg.openning_date}</p>
            <p>closing date: {cg.closing_date}</p>
            <p>accessibility: {cg.accessibility}</p>
            <p>reservations: {cg.reservations.length}</p>
        </>
    )
}

export default Campgrounds;