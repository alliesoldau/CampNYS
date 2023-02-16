import React from 'react'
import SiteCard from '../../../styles/SiteCard'
import { GiCampingTent } from 'react-icons/gi'
import { MdHouseSiding } from 'react-icons/md'
import { GiTable } from 'react-icons/gi'
import { GiWoodCabin } from 'react-icons/gi'
import { GiMushroomHouse } from 'react-icons/gi'

function ResSites({ resSite, setSelectedSite }) {

    function handleClick() {
        setSelectedSite(resSite)
        window.scrollTo(0, 0)
    }

    return (
        <>
        { resSite ? 
            <SiteCard> 
                <div className="res-site-card">
                    <div className="top">
                        <div className="left-container">
                            <div className='line-items'><h3>Site Name:</h3><p>{resSite.name}</p></div>
                            <div className='line-items'><h3>Category:</h3><p>{resSite.category}</p></div>
                            <div className='line-items'><h3>Capacity:</h3><p>{resSite.capacity}</p></div>
                            <div className='line-items'><h3>Car Capactiy:</h3><p>{resSite.car_capacity}</p></div>
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