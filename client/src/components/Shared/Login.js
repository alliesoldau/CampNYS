import React, { useState, useContext } from 'react'
import { UserContext } from '../Context/UserContext'
import { LoginUser } from '../Stores/Fetches'
import { useHistory } from 'react-router-dom'

function Login() {
    
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })
    const { setUser } = useContext(UserContext);
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
            history.push(`/users/${user.id}`)
        })

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
                <button type='submit'>Login</button>
            </form>
        </>
    )
}

export default Login;