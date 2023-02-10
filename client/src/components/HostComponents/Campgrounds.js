import React from 'react';
import { useHistory } from 'react-router-dom'
import CGCard from '../../styles/CGCard'
import { PieChart } from 'react-minimal-pie-chart';

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
                        <h2>{cg.name} </h2>
                        <div className="buttons">
                            <button onClick={handleClick}>See Campground Details</button>
                        </div>
                    </div>
                    <div className="charts">
                        <div className="chart-with-label">
                            <h3>Booking for Tonight</h3>
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
                            <h3>Booking for the Week</h3>
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