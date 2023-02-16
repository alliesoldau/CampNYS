import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import Sites from './Sites'
import { UserContext } from '../Context/UserContext'
import arrow from '../../images/back_arrow.png'
import ArrowHeader from '../../styles/ArrowHeader'
import Grid from '../../styles/Grid'

function SitesSummary() {
    
    const { user } = useContext(UserContext)
    const params = useParams()


    let campground
    if (user) {
        campground = user.campgrounds.find((cg) => { return ( cg.id === parseInt(params.id) ) })
    }

    return (
        <>
        { user && campground ? <>
        <ArrowHeader>
            <div className="header">
                <div className="top">
                    <Link to={`/host/campground/${campground.id}`}>
                        <img className="arrow" src={arrow}></img>
                    </Link>
                    <h1>Back to Campground Details</h1>
                </div>
                <div className="bottom">
                <Link to={`/campground/${campground.id}/add_sites`}>
                    <button>Add Sites</button>
                </Link>
                </div>
                <h3>{campground.name} Sites Summary</h3>
            </div>
        </ArrowHeader>
            { campground.sites && campground.sites.length > 0 ? 
                <Grid>
                {campground.sites.map((site) => {
                return(
                    <Sites 
                        key={site.id}
                        site={site}
                        campground={campground}
                    />
                    )
                })}
                </Grid> : null }
            </> : null }
        </>
    )
}

export default SitesSummary;