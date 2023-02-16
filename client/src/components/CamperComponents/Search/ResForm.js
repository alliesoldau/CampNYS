import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { CamperReservationsContext } from '../../Context/CamperReservationsContext'
import { CampgroundContext } from '../../Context/CampgroundContext'
import { AddNewRes } from '../../Stores/Fetches'
import Form from '../../../styles/Form'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { send } from 'emailjs-com';

function ResForm({ selectedSite, campground, setErrors }) {

    // date picker source: https://www.npmjs.com/package/react-datepicker 
    // https://reactdatepicker.com/

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(null)
    const { user } = useContext(UserContext)
    const { campRes, setCampRes } = useContext(CamperReservationsContext)
    const { campgrounds, setCampgrounds } = useContext(CampgroundContext)
    const history = useHistory()

    const onChange = (dates) => {
        const [start, end] = dates
        setStartDate(start)
        setEndDate(end)
    }

    const [formData, setFormData] = useState({
        number_of_people: null,
        start_date: null,
        end_date: null,
        cars: null,
        site_id: selectedSite.id,
        camper_id: user.id,
        host_id: campground.host_id
    })

    const { number_of_people, cars } = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    
    let formDataWithDate 

    function handleSubmit(e) {
        e.preventDefault()
        let sDate
        let eDate 
        if (startDate && endDate) {
            sDate = `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()}`
            eDate = `${endDate.getFullYear()}-${endDate.getMonth() + 1}-${endDate.getDate()}`
            formDataWithDate = {...formData, start_date: sDate, end_date: eDate}
        }
        AddNewRes(formDataWithDate).then(res => {
            if(res.ok) {
                res.json()
                .then((resData) => {
                    setCampRes([...campRes, resData])
                    const updatedRess = [...selectedSite.reservations, resData]
                    const updatedSite = {...selectedSite, reservations: updatedRess}
                    const updatedSites = campground.sites.map((site) => site.id === selectedSite.id ? updatedSite : site)
                    const updatedCG = {...campground, sites: updatedSites }
                    const updatedCGs = campgrounds.map((cg) => cg.id === campground.id ? updatedCG : cg)
                    setCampgrounds(updatedCGs)
                    setErrors([])
                    history.push(`/campers/${user.id}/reservations`)
                })
            } else {
                res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))   
            }   
        })
        const sendMe = ({from_name: 'CampNYS',
            to_name: `${user.first_name} ${user.last_name}`,
            message: `Your reservation at ${campground.name} for site ${selectedSite.name} starting on ${formDataWithDate.start_date} and ending on ${formDataWithDate.end_date} has been confirmed for ${formData.number_of_people} campers and ${formData.cars} cars.`,
            reply_to: 'alliesoldau@gmail.com',
            user_email: `${user.email}`
        })
        triggerSend(sendMe)
    }

    // filter out days that are already booked  
    // i have to format the start and end date because react date picker handles dates differently
    // then i seeded them into the data  
    const exclude = selectedSite.reservations.map((site) => {
        // start date 
        const day = (new Date(site.start_date).getDate()) + 1
        const month = (new Date(site.start_date).getMonth()) + 1
        const year = (new Date(site.start_date).getFullYear())
        const dateFormatted = `${year}-${month}-${day}`

        // end date 
        const dayEnd = (new Date(site.end_date).getDate()) + 1
        const monthEnd = (new Date(site.end_date).getMonth()) + 1
        const yearEnd = (new Date(site.end_date).getFullYear())
        const dateFormattedEnd = `${yearEnd}-${monthEnd}-${dayEnd}`

        // get all the dates in the range
        const datesBetween = getDatesBetween(dateFormatted, dateFormattedEnd)

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
        return datesBetween       
    })

    function triggerSend(toSend) {
        send(
            'service_nz0rb1z',
            'template_v74160p',
            toSend,
            'dBC0CgsBZ0nSOUSWr'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
        }

    return (
        <>
        { selectedSite && campground ? 
            <Form> 
            <form onSubmit={handleSubmit}>
                <div className="res-form">
                    <div className="left-container">
                    <DatePicker
                        selected={startDate}
                        onChange={onChange}
                        startDate={startDate}
                        endDate={endDate}
                        excludeDates={exclude.flat()}
                        minDate={new Date()}
                        selectsRange
                        inline
                    />
                    </div>
                    <div className="right-container">
                    <div className="line-item">
                        <label>Number of People, max {selectedSite.capacity}</label>
                        <input type='number' min={0} max={selectedSite.capacity} name='number_of_people' value={number_of_people} onChange={handleChange} />
                    </div>

                    <div className="line-item">
                        <label>Number of Cars, max {selectedSite.car_capacity}</label>
                        <input type='number' min={0} max={selectedSite.car_capacity} name='cars' value={cars} onChange={handleChange} />    
                    </div>

                    <div className="buttons-res-form">
                        <button className="res-form-submit" type='submit'>Make Reservation</button>
                    </div>

                    </div>
                </div>
            </form>                
            </Form> : null }
      </>
    )
}

export default ResForm;