import React, { useContext, useState } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { CampgroundContext } from '../../Context/CampgroundContext'
import ResSites from './ResSites'
import ResForm from './ResForm'
import Grid from '../../../styles/Grid'
import ArrowHeader from '../../../styles/ArrowHeader'
import arrow from '../../../images/back_arrow.png'


function MakeRes() {
    
    const history = useHistory()
    const params = useParams()
    const { user } = useContext(UserContext)
    const { campgrounds } = useContext(CampgroundContext)
    const [selectedSite, setSelectedSite] = useState(null)

    let campground
    if (user && campgrounds) {
        campground = campgrounds.find((cg) => { return ( cg.id === parseInt(params.id) ) })
    }

    return (
        <>
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
                <ResForm selectedSite={selectedSite} campground={campground}/>
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