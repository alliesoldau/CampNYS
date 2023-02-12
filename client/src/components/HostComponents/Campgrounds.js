import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom'
import CGCard from '../../styles/CGCard'
import { PieChart } from 'react-minimal-pie-chart';
import { CampgroundContext } from '../Context/CampgroundContext'

function Campgrounds({ cg }) {

    const history = useHistory()

    function handleClick() {
        history.push(`/host/campground/${cg.id}`)
    }

    const { campgrounds } = useContext(CampgroundContext)

    let myCampground
    let cgSites
    let resArray = []
    if (campgrounds) {
        myCampground = campgrounds.find((cground) => { return ( cground.id === cg.id ) })
        if (myCampground) {
            cgSites = myCampground.sites
        } 
        if (cgSites) {
            cgSites.forEach((site) => resArray.push(site.reservations))
        }
    }
    const flattenedResArray = resArray.flat()
    // console.log(flattenedResArray)


    // this gets you the first day of the week
    let monthStart
    const today = new Date()
    // console.log(today.getDay())
    const dayAdjust = (new Date(today).getDay())
    const dayStart = (new Date(today).getDate()) - dayAdjust
    // console.log(tempDay, dayAdjust)
    const tempMonth = (new Date(today).getMonth()) + 1
    if (tempMonth === 12) {
        monthStart = 1
    } else {
        monthStart = tempMonth
    }
    const yearStart = (new Date(today).getFullYear())
    // console.log(yearStart, monthStart)
    const weekStart = `${yearStart}-${monthStart}-${dayStart}`
    // console.log(weekStart)
    const weekEnd = `${yearStart}-${monthStart}-${dayStart + 6}`
    // console.log(weekEnd)

    // get all the dates in this week's range
    const datesBetween = getDatesBetween(weekStart, weekEnd)

    function getDatesBetween (start, end) {
        const dates = [];
        let currentDate = new Date(start)
        let endDate = new Date(end)
        while (currentDate <= endDate) {
            dates.push(currentDate);
            currentDate = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                currentDate.getDate() + 1, // Will increase month if over range
            );
        }
        return dates
    }
        
    console.log(datesBetween)

    return (
        <CGCard>
            <div className="card">
                { cg && flattenedResArray.length > 0 ? 
                    <>
                    <div className="header">
                        <h2>{cg.name} </h2>
                        <div className="buttons">
                            <button onClick={handleClick}>See Campground Details</button>
                        </div>
                    </div>
                    <div className="charts">
                        <div className="chart-with-label">
                            <h3>Booking for the Week</h3>
                            <PieChart className="pieChart"
                                data={[
                                    { title: "Available", value: cg.res_count, color: '#fcaa67'},
                                    { title: "Booked", value: 7, color: '#548687' },
                                ]}
                                animate
                                radius={50}
                                animationDuration={1000}
                                label={(data) => data.dataEntry.title}
                                labelPosition={65}
                                labelStyle={{
                                    fontSize: ".35em",
                                    fill: "white"
                                }}
                                animationEasing="ease-out"  
                            /> 
                        </div>
                        <div className="chart-with-label">
                            <h3>Booking for the Month</h3>
                            <PieChart className="pieChart"
                                data={[
                                    { title: "Available", value: cg.site_count, color: '#b0413e'},
                                    { title: "Booked", value: 9, color: '#473335' },
                                ]}
                                animate
                                radius={50}
                                animationDuration={1000}
                                label={(data) => data.dataEntry.title}
                                labelPosition={65}
                                labelStyle={{
                                    fontSize: ".35em",
                                    fill: "white"
                                }}
                                animationEasing="ease-out"  
                            /> 
                        </div>
                    </div>
                    </>
                : null }
            </div>
        </CGCard>
    )
}

export default Campgrounds;