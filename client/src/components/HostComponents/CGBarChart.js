import React from 'react'
import BarChart from 'react-easy-bar-chart';


function CGBarChart({ flattenedAllResDates }) {

  let sun = 0
  let mon = 0
  let tues = 0
  let wed = 0
  let thurs = 0
  let fri = 0
  let sat = 0
  
  flattenedAllResDates.forEach((date) => {
    if (new Date(date).getDay() === 0) {
      sun = sun + 1
    } else if (new Date(date).getDay() === 1) {
      mon = mon + 1
    } else if (new Date(date).getDay() === 2) {
      tues = tues + 1
    } else if (new Date(date).getDay() === 3) {
      wed = wed + 1
    } else if (new Date(date).getDay() === 4) {
      thurs = thurs + 1
    } else if (new Date(date).getDay() === 5) {
      fri = fri + 1
    } else if (new Date(date).getDay() === 6) {
      sat = sat + 1
    }
  })  

    const data = [
        {
          title:  "Sunday",
          value: sun,
          color: "#196f3d",
        },
        {
          title:  "Monday",
          value: mon,
          color: "#a93226",
        },
        {
          title:  "Tuesday",
          value: tues,
          color: " #1f618d",
        },
        {
          title:  "Wednesday",
          value: wed,
          color: "#839192",
        },
        {
          title:  "Thursday",
          value: thurs,
          color: "#d35400",
        },
        {
          title:  "Friday",
          value: fri,
          color: " #a9cce3",
        },
        {
          title:  "Saturday",
          value: sat,
          color: "#2e4053",
        },
        ];

    return (
        <>
        <p>Bar Chart</p>
        <BarChart 
          xAxis='React Bar Chart'
          yAxis="Values"
          height={400}
          width={800}
          data={data}
        />
        </>
    )
}

export default CGBarChart;