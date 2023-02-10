import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import Campgrounds from './Campgrounds'
import ArrowHeader from '../../styles/ArrowHeader'
import Grid from '../../styles/Grid'

function HostCampgrounds() {
    const { user } = useContext(UserContext)
    const history = useHistory()

    function handleClick() {
        history.push(`/host/${user.id}/add_campground`)
    }

    return (
            <>
            { user && user.campgrounds && user.campgrounds.length > 0 ? 
                <>
                <ArrowHeader>
                    <h1>All Campgrounds</h1>
                    <button className="add-campground" onClick={handleClick}>Add Campground</button>
                </ArrowHeader>
                <Grid>
                        {user.campgrounds.map((cg) => {
                        return(
                            <Campgrounds 
                                key={cg.id}
                                cg={cg}
                            />
                        )
                    })}
                </Grid>
                </>
            : <p>You have no campgrounds</p> }
        </>
    )
}

export default HostCampgrounds;