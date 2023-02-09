import React, { useState, useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { CampgroundContext } from '../Context/CampgroundContext'
import { CamperReservationsContext } from '../Context/CamperReservationsContext'
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
        if (user.host===false) {
            // console.log('camper')
            GrabCamperReservations(user.id).then((d) => {
                // console.log(d)
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
            <h3 className="login">Login</h3>
            <form onSubmit={handleSubmit}>
                    <label>
                        <div className="label">
                            <i class="gg-mail"></i>
                            Email
                        </div>
                    </label>
                    <input type='text' name='email' value={email} onChange={handleChange} placeholder={'example@email.com'} />
                    <label>
                        <div className="label">
                            <i class="gg-lock"></i>
                            Password
                        </div>
                    </label>
                    <input type='password' name='password' value={password} onChange={handleChange} placeholder={'********'}/>
                <button className="submit" type='submit'>Login</button>
            </form>
        </>
    )
}

export default Login;