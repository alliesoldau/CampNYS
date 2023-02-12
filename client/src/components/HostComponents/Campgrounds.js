import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import CGCard from '../../styles/CGCard'
import { PieChart } from 'react-minimal-pie-chart';
import { CampgroundContext } from '../Context/CampgroundContext'
import CGBarChart from './CGBarChart'

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

    const allResDates = flattenedResArray.map((ressy) => {
        // start date 
        const day = (new Date(ressy.start_date).getDate()) + 1
        const month = (new Date(ressy.start_date).getMonth()) + 1
        const year = (new Date(ressy.start_date).getFullYear())
        const dateFormatted = `${year}-${month}-${day}`

        // end date 
        const dayEnd = (new Date(ressy.end_date).getDate()) + 1
        const monthEnd = (new Date(ressy.end_date).getMonth()) + 1
        const yearEnd = (new Date(ressy.end_date).getFullYear())
        const dateFormattedEnd = `${yearEnd}-${monthEnd}-${dayEnd}`

        // get all the dates in the range
        const datesBetweenRes = getDatesBetweenRes(dateFormatted, dateFormattedEnd)

        function getDatesBetweenRes (start, end) {
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
        return datesBetweenRes       
    })

    const flattenedAllResDates = allResDates.flat()

    // this gets you the first and last days of the week
    const today = new Date()
    const dayAdjust = (new Date(today).getDay())
    const dayStart = (new Date(today).getDate()) - dayAdjust
    const monthStart = (new Date(today).getMonth()) + 1
    const yearStart = (new Date(today).getFullYear())
    const weekStart = `${yearStart}-${monthStart}-${dayStart}`
    const weekEnd = new Date(weekStart)
    weekEnd.setDate(weekEnd.getDate() + 6)

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

    // get the total number of days in the month you're in
    // this even works for leap years :D
    const monthDays = daysInMonth(today.getMonth() + 1, today.getFullYear())
    function daysInMonth (month, year) {
        return new Date(year, month, 0).getDate();
    }

    // start date
    const day = 1
    const month = (today).getMonth() + 1
    const year = today.getFullYear()
    const monthStartDateFormatted = `${year}-${month}-${day}`

    // end date 
    const dayEnd = monthDays
    const monthEnd = today.getMonth() + 1
    const yearEnd = today.getFullYear()
    const monthEndDateFormatted = `${yearEnd}-${monthEnd}-${dayEnd}`

    const monthDatesBetween = getDatesBetween(monthStartDateFormatted, monthEndDateFormatted)

    let weekTotal = 0
    flattenedAllResDates.forEach((resDate) => {
        datesBetween.forEach((date) => {
            if (resDate.getTime() == date.getTime()) {
                weekTotal = weekTotal + 1
            }
        })
    })

    let monthTotal = 0
    flattenedAllResDates.forEach((resDate) => {
        monthDatesBetween.forEach((date) => {
            if (resDate.getTime() == date.getTime()) {
                monthTotal = monthTotal + 1
            }
        })
    })

    return (
        <CGCard>
            <div className="card">
                { cg ? 
                    <>
                    <div className="header">
                        <h2>{cg.name} </h2>
                        <div className="buttons">
                            <button onClick={handleClick}>See Campground Details</button>
                        </div>
                    </div>
                    { flattenedResArray.length > 0 ? 
                    <div className="charts">
                        <div className="chart-with-label">
                            <h3>Bookings for the Week</h3>
                            <PieChart className="pieChart"
                                data={[
                                    { title: "Available", value: cg.site_count*7, color: '#fcaa67'},
                                    { title: "Booked", value: weekTotal, color: '#548687' },
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
                            <h3>Bookings for the Month</h3>
                            <PieChart className="pieChart"
                                data={[
                                    { title: "Available", value: cg.site_count*monthDays, color: '#b0413e'},
                                    { title: "Booked", value: monthTotal, color: '#473335' },
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
                        <CGBarChart flattenedResArray={flattenedResArray}/>
                    </div> : <h3>This campground doesn't have any campsites yet.</h3>}
                    </>
                : null }
            </div>
        </CGCard>
    )
}

export default Campgrounds;