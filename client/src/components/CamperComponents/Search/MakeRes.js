import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { CampgroundContext } from '../../Context/CampgroundContext'
import ResSites from './ResSites'
import ResForm from './ResForm'
import Grid from '../../../styles/Grid'
import ResFormStyles from '../../../styles/ResFormStyles'
import ArrowHeader from '../../../styles/ArrowHeader'
import arrow from '../../../images/back_arrow.png'
import SiteCard from '../../../styles/SiteCard'
import { GiCampingTent } from 'react-icons/gi'
import { MdHouseSiding } from 'react-icons/md'
import { GiTable } from 'react-icons/gi'
import { GiWoodCabin } from 'react-icons/gi'
import { GiMushroomHouse } from 'react-icons/gi'
import Alert from '@mui/material/Alert';


function MakeRes() {
    
    const params = useParams()
    const { user } = useContext(UserContext)
    const { campgrounds } = useContext(CampgroundContext)
    const [ selectedSite, setSelectedSite ] = useState(null)
    const [ errors, setErrors ] = useState([])

    let campground
    if (user && campgrounds) {
        campground = campgrounds.find((cg) => { return ( cg.id === parseInt(params.id) ) })
    }

    return (
        <>
        <div className="errors">
            { errors ? errors.map(e => <Alert severity="error">{`${e.toUpperCase()}`}</Alert>):null} 
        </div>
        { user && campground ? 
        <>
            <ArrowHeader>
                <div className="top">
                    <Link to={`/search_campgrounds`}>
                        <img className="arrow" src={arrow}></img>
                    </Link>
                    <h1>Back to Campgrounds Map</h1>
                </div>
                <h3>{campground.name}'s Sites</h3>
            </ArrowHeader>
            { selectedSite ? <>
            <ResFormStyles >
                <div className="container">
                <SiteCard res={true}> 
                <div className="res-site-card">
                    <div className="top">
                        <div className="left-container">
                            <div className="line-items"><h3 className="sel">Site Name:</h3><p className="sel">{selectedSite.name}</p></div>
                            <div className="line-items"><h3 className="sel">Category:</h3><p className="sel">{selectedSite.category}</p></div>
                            <div className="line-items"><h3 className="sel">Capacity:</h3><p className="sel">{selectedSite.capacity}</p></div>
                            <div className="line-items"><h3 className="sel">Car Capactiy:</h3><p className="sel">{selectedSite.car_capacity}</p></div>
                        </div>
                        <div className="right-container">
                            { selectedSite.category === 'Tent' ? 
                                <h2><GiCampingTent /></h2>
                                : null }
                            { selectedSite.category === 'Lean-to' ?
                                <h2><MdHouseSiding /></h2> 
                                : null }
                            { selectedSite.category === 'Elevated surface' ? 
                                <h2><GiTable /></h2>
                                : null }
                            { selectedSite.category === 'Cabin' ?
                                <h2><GiWoodCabin /></h2>
                                : null }
                            { selectedSite.category === 'Mushroom shelter' ?
                                <h2><GiMushroomHouse /></h2>
                                : null }
                        </div>
                    </div>
                </div>
                </SiteCard>
                <ResForm selectedSite={selectedSite} campground={campground} setErrors={setErrors}/>
                </div>
            </ResFormStyles>
            </> : null }
            <Grid>
            { campground.sites && campground.sites.length > 0 ? 
                <>
                {campground.sites.map((resSite) => {
                return(
                    <ResSites 
                        key={resSite.id}
                        resSite={resSite}
                        setSelectedSite={setSelectedSite}
                    />
                    )
                })}
                </> : null }
                </Grid>
        </> 
        : null }
        </>
    )
}

export default MakeRes;