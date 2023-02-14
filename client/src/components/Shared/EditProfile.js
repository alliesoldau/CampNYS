import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom"
import { UserContext } from '../Context/UserContext'
import { EditProfileInfo } from '../Stores/Fetches'
import Profile from '../../styles/Profile'
import Form from '../../styles/Form'

function EditProfile() {

    const { user, setUser } = useContext(UserContext);

    const history = useHistory()

    const [formData, setFormData] = useState({
        id: user.id,
        email: user.email,
        host: user.host,
        first_name: user.first_name,
        last_name: user.last_name,
        image_url: user.image_url,
        affiliation: user.affiliation
    })

    const {first_name, last_name, image_url, affiliation} = formData

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
     
    function handleSubmit(e) {
        e.preventDefault();
        EditProfileInfo(formData).then((data) => {
            setUser(data)
        })
        history.push(`/users/${user.id}/profile`)
    }

    return (
        <Profile>
        { user ? 
        <div className="edit-profile">
            <div className="edit-header">
                <h1>Edit Profile</h1>
            </div>
                { user.host ? null : 
                <div className="edit-pro-pic">
                    <img src={user.image_url}/>
                </div>
                }
                <div className="user-info-container">
                    <form onSubmit={handleSubmit}>
                        <div className="user-info">
                        <Form>
                            <div className="line-item">
                                <label>First Name</label>
                                <input type='text' name='first_name' value={first_name} onChange={handleChange} />
                            </div>
                            <div className="line-item">
                                <label>Last Name</label>
                                <input type='text' name='last_name' value={last_name} onChange={handleChange} />
                            </div>
                            <div className="line-item">
                                <label>Image URL</label>
                                <input type='text' name='image_url' value={image_url} onChange={handleChange} />
                            </div>
                            { user.host === true ? 
                            <div className="line-item">
                                <label>Affiliation</label>
                                <input type='text' name='affiliation' value={affiliation} onChange={handleChange} />
                            </div> : null }
                            <div className="buttons">
                                <button className="submit" type='submit'>Submit Edits</button>
                            </div>
                            </Form>
                        </div> 
                    </form>
                </div>
            </div> : null }
        </Profile>
    )
}

export default EditProfile;