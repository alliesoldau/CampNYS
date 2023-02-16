import React, { useState, useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { CampgroundContext } from '../Context/CampgroundContext'
import { CamperReservationsContext } from '../Context/CamperReservationsContext'
import Alert from '@mui/material/Alert';
import { LoginUser, GrabAllCampgrounds, GrabCamperReservations } from '../Stores/Fetches'
import { useHistory } from 'react-router-dom'

function Login() {
    
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    const [ errors, setErrors ] = useState([])

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
        LoginUser(userData).then(res => {
            if(res.ok) {
                res.json()
                .then(user => {
                    setUser(user)
                    localStorage.userID=user.id
                    UserTypeDependentFxn(user)
                    history.push(`/users/${user.id}`)
                    setErrors([])
                 })
            } else {
                res.json().then(data => setErrors(data.errors))
            }
        })
        GrabAllCampgrounds().then(setCampgrounds)
    }

    function UserTypeDependentFxn(user) {
        if (user.host===false) {
            GrabCamperReservations(user.id).then((d) => {
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
            <div className="errors">
                { errors.length > 0 ?
                    <Alert severity="error">{errors}</Alert>
                : null } 
            </div>
            <h3 className="login">Login</h3>
            <form onSubmit={handleSubmit}>
                    <label>
                        <div className="label">
                            <i class="gg-mail"></i>
                            Email<span>*</span>
                        </div>
                    </label>
                    <input type='text' name='email' value={email} onChange={handleChange} placeholder={'example@email.com'} />
                    <label>
                        <div className="label">
                            <i class="gg-lock"></i>
                            Password<span>*</span>
                        </div>
                    </label>
                    <input type='password' name='password' value={password} onChange={handleChange} placeholder={'********'}/>
                <button className="submit" type='submit'>Login</button>
            </form>
        </>
    )
}

export default Login;