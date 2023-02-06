import React, { useState, useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { CampgroundContext } from '../Context/CampgroundContext'
import { CamperReservationsContext } from '../Context/CamperReservationsContext'
import { LoginUser, GrabAllCampgrounds, GrabCamperReservations } from '../Stores/Fetches'
import { useHistory } from 'react-router-dom'

function Login() {
    
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    const { user, setUser } = useContext(UserContext)
    const { setCampgrounds } = useContext(CampgroundContext)
    const { campRes, setCampRes } = useContext(CamperReservationsContext)
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

    function UserTypeDependentFxn(user) {
        if (user.host===true) {
            // TO DO: move all host context initial setting up here 
            console.log('host')
        }
        else {
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