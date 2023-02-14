import React from 'react';

function MapFilters({ setBoat, boat, setHikein, hikein, setRoad, road, setHP, HP, setLG, LG, setND, ND, setCat, cat }) {

    function handleBoatClick() {
        setBoat(!boat)
    }

    function handleHikeinClick() {
        setHikein(!hikein)
    }

    function handleRoadClick() {
        setRoad(!road)
    }

    function handleHPClick() {
        setHP(!HP)
    }

    function handleNDClick() {
        setND(!ND)
    }

    function handleLGClick() {
        setLG(!LG)
    }

    function handleCatClick() {
        setCat(!cat)
    }

    return (
        <>
            <h3 className="filters">Campground Filters</h3>
            <label>Accesibility</label>
            <div className="checks">
                <div className="line">
                    <input type="checkbox" value="Boat" defaultChecked onClick={handleBoatClick}/>Boat
                </div>
                <div className="line">
                    <input type="checkbox" value="Hike-in" defaultChecked onClick={handleHikeinClick}/>Hike-in
                </div>
                <div className="line">
                    <input type="checkbox" value="Road" defaultChecked onClick={handleRoadClick}/>Road
                </div>
            </div>
            <label>Region</label>
            <div className="checks">
                <div className="line">
                    <input type="checkbox" defaultChecked onClick={handleHPClick}/>High Peaks
                </div>
                <div className="line">
                    <input type="checkbox" defaultChecked onClick={handleNDClick}/>North Daks
                </div>
                <div className="line">
                    <input type="checkbox" defaultChecked onClick={handleLGClick}/>Lake George
                </div>
                <div className="line">
                    <input type="checkbox" defaultChecked onClick={handleCatClick}/>Catskills
                </div>
            </div>


        </>
    )
}

export default MapFilters;