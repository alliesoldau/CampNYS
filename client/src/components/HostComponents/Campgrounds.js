import React from 'react';
import { useHistory } from 'react-router-dom'
import CGCard from '../../styles/CGCard'
function Campgrounds({ cg }) {

    const history = useHistory()

    function handleClick() {
        history.push(`/host/campground/${cg.id}`)
    }

    return (
        <CGCard>
            <div className="card">
                { cg ? 
                    <>
                    <div className="header">
                        <h2>Campground Name: {cg.name} </h2>
                        <p>Reservations: {cg.res_count}</p>
                    </div>
                    <div className="charts">
                        <p>charts</p>
                    </div>
                    <div className="buttons">
                        <button onClick={handleClick}>See Campground Details</button>
                    </div>
                    </>
                : null }
            </div>
        </CGCard>
    )
}

export default Campgrounds;