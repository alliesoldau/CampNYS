import React, { useState, useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { CampgroundContext } from '../Context/CampgroundContext'
import { CamperReservationsContext } from '../Context/CamperReservationsContext'
import { HostCampgroundsContext } from '../Context/HostCampgroundsContext'
import { LoginUser, GrabAllCampgrounds, GrabCamperReservations, GrabHostCampgrounds } from '../Stores/Fetches'
import { useHistory } from 'react-router-dom'

function Login() {
    
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    const { setUser } = useContext(UserContext)
    const { setCampgrounds } = useContext(CampgroundContext)
    const { setCampRes } = useContext(CamperReservationsContext)
    const { setHostCampgrounds} = useContext(HostCampgroundsContext)

    const history = useHistory()
    const {email, password} = formData

    function handleSubmit(e) {
        e.preventDefault()
        const userData = {
            email,
            password
        }
        LoginUser(userData).then(user => {
            setUser(user)
            localStorage.userID=user.id
            UserTypeDependentFxn(user)
            history.push(`/users/${user.id}`)
        })
        GrabAllCampgrounds().then(setCampgrounds)
    }

    // TO DO: pack all provider data related to the user in the user provider 
    function UserTypeDependentFxn(user) {
        if (user.host===true) {
            // TO DO: move all host context initial setting up here? unsure if i have to move the other providers here
            console.log('host')
            GrabHostCampgrounds(user.id).then((d)=> {
                console.log(d)
                setHostCampgrounds(d)
            })
        } else {
            console.log('camper')
            GrabCamperReservations(user.id).then((d) => {
                console.log(d)
                setCampRes(d)
            })
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }

    return(
        <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type='text' name='email' value={email} onChange={handleChange} />
                <label>Password</label>
                <input type='password' name='password' value={password} onChange={handleChange} />
                <button className="submit" type='submit'>Login</button>
            </form>
        </>
    )
}

export default Login;