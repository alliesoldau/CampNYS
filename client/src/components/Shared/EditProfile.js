import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom"
import { UserContext } from '../Context/UserContext'
import { EditProfileInfo } from '../Stores/Fetches'

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
        <>
            <p>Edit Profile</p>
            <p>{user.last_name}</p>
                <h2>Edit Profile</h2>
                <form onSubmit={handleSubmit}>
                    <label>First Name</label>
                        <input type='text' name='first_name' value={first_name} onChange={handleChange} />

                    <label>Last Name</label>
                        <input type='text' name='last_name' value={last_name} onChange={handleChange} />

                    <label>Image URL</label>
                        <input type='text' name='image_url' value={image_url} onChange={handleChange} />

                    { user.host === true ? 
                    <>
                        <label>Affiliation</label>
                            <input type='text' name='affiliation' value={affiliation} onChange={handleChange} />
                    </> : null }

                    <button type='submit'>Submit Edits</button>
            </form>
        </>
    )
}

export default EditProfile;