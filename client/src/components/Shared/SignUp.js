import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import { SignUpUser } from '../Stores/Fetches'

function SignUp() {

    const [formData, setFormData] = useState({
        email:'',
        password:'',
        first_name:'',
        last_name:'',
        affiliation:'',
        host:false
    })
    const { setUser } = useContext(UserContext);

    const history = useHistory()

    const {email, first_name, last_name, affiliation, host, password} = formData

    function handleSubmit(e) {
        e.preventDefault()
        const userData = {
            email,
            first_name,
            last_name,
            affiliation,
            host,
            password
        }
        SignUpUser(userData).then(user => {
            setUser(user)
            localStorage.userID=user.id
            history.push(`/users/${user.id}`)
        })
    }

    // because jsx doesn't understand booleans I had to manually check for boolean o_0 
    const handleChange = (e) => {
        let { name, value } = e.target
        if (name === 'host') {
            if (value === 'true') {
                value = true
            } else {
            value = false
        }
      }
      setFormData({ ...formData, [name]: value })
    }

    return(
        <>
            <h3 className="signup">SignUp</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <div className="label">
                        <i class="gg-mail"></i>
                        Email
                    </div>
                </label>
                <input type='text' name='email' value={email} onChange={handleChange} placeholder={'example@email.com'}/>
                <label>
                    <div className="label">
                            <i class="gg-pen"></i>
                            First Name
                    </div>
                </label>
                <input type='text' name='first_name' value={first_name} onChange={handleChange} placeholder={'Freddie'}/>
                <label>
                    <div className="label">
                        <i class="gg-pen"></i>
                        Last Name
                    </div>
                </label>
                <input type='text' name='last_name' value={last_name} onChange={handleChange} placeholder={'Frog'}/>
                <label>Are you a host or a camper?</label>
                <div className="radio-container" onChange={handleChange}>
                    <div className="radio-container">
                        <input type='radio' name='host' value={false} /><p className="radio">Camper</p>
                    </div>
                    <div className="radio-container">
                        <input type='radio' name='host' value={true} /><p className="radio" >Host</p>
                    </div>
                </div>
                { formData.host===true ? 
                    <div>
                        <label>Affiliation</label>
                        <select
                            onChange={handleChange}
                            name='affiliation' 
                            value={affiliation} >
                                <option>NYS Parks & Rec</option>
                                <option>ADK Mountain Club</option>
                                <option>Independent</option>
                        </select>
                    </div> 
                : null }
                <label>
                    <div className="label">
                        <i class="gg-lock"></i>
                        Password
                    </div>
                </label>
                <input type='password' name='password' value={password} onChange={handleChange} placeholder={'********'}/>
                <button className="submit" type='submit'>SignUp</button>
            </form>
        </>
    )
}

export default SignUp;