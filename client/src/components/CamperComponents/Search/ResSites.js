import React, { useState } from 'react'
import SiteCard from '../../../styles/SiteCard'
import { GiCampingTent } from 'react-icons/gi'
import { MdHouseSiding } from 'react-icons/md'
import { GiTable } from 'react-icons/gi'
import { GiWoodCabin } from 'react-icons/gi'
import { GiMushroomHouse } from 'react-icons/gi'

function ResSites({ resSite, setSelectedSite }) {

    function handleClick() {
        setSelectedSite(resSite)
        setSelected(true)
    }

    const [selected, setSelected] = useState(false)
    console.log(selected)

    return (
        <>
        { resSite ? 
            <SiteCard selected={selected}> 
                <div className="site-card">
                    <div className="top">
                        <div className="left-container">
                            <h3>Site Name: {resSite.name} </h3>
                            <h3>Category: {resSite.category}</h3>
                            <h3>Capacity: {resSite.capacity}</h3>
                            <h3>Car Capactiy: {resSite.car_capacity}</h3>
                        </div>
                        <div className="right-container">
                            { resSite.category === 'Tent' ? 
                                <h2><GiCampingTent /></h2>
                                : null }
                            { resSite.category === 'Lean-to' ?
                                <h2><MdHouseSiding /></h2> 
                                : null }
                            { resSite.category === 'Elevated surface' ? 
                                <h2><GiTable /></h2>
                                : null }
                            { resSite.category === 'Cabin' ?
                                <h2><GiWoodCabin /></h2>
                                : null }
                            { resSite.category === 'Mushroom shelter' ?
                                <h2><GiMushroomHouse /></h2>
                                : null }
                        </div>
                    </div>
                <div className="buttons">
                    <button className="select" onClick={handleClick}>Select This Site</button>
                </div>
                </div>
            </SiteCard> : null }
        </>
    )
}

export default ResSites;