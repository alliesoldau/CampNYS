import React from 'react'
import BarChart from 'react-easy-bar-chart';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';
import { Animation } from '@devexpress/dx-react-chart';

function CGBarChart({ flattenedAllResDates }) {

  // react bar chart source: https://experience-experiments.github.io/react-easy-chart/bar-chart/index.html 

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
      { day: 'sun', popularity: sun },
      { day: 'mon', popularity: mon },
      { day: 'tues', popularity: tues },
      { day: 'wed', popularity: wed },
      { day: 'thurs', popularity: thurs },
      { day: 'fri', popularity: fri },
      { day: 'sat', popularity: sat },
    ];



    return (
        <>
        <Chart
          data={data}
        >
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            valueField="popularity"
            argumentField="day"
          />
          <Title text="Reservation Popularity by Day" />
          <Animation />
        </Chart>
        </>
    )
}

export default CGBarChart;