import React, { useContext } from 'react';
import { Link } from "react-router-dom"
import { UserContext } from '../Context/UserContext'
import Profile from '../../styles/Profile'

function UserProfile() {

    const { user } = useContext(UserContext);

    return  (
        <>
        { user ? 
            <Profile>
                <div className="profile-container">
                    <div className="header">
                        <h1>{user.first_name} {user.last_name}</h1>
                        <p>{user.email}</p>
                    </div>
                    <div className="user-info-container">
                        <div className="user-info">
                            <div className="line-item">
                                <h4>First Name</h4>
                                <p>{user.first_name}</p>
                            </div>
                            <div className="line-item">
                                <h4>Last Name</h4>
                                <p>{user.last_name}</p>
                            </div>
                            <div className="line-item">
                                <h4>Email</h4>
                                <p>{user.email}</p>
                            </div>
                            <div className="line-item">
                                <h4>Pro Pic URL</h4>
                                <p>{user.image_url}</p>
                            </div>
                            <div className="line-item">
                            { user.host===true ?
                                <>
                                    <h4>Affiliation</h4>
                                    <p>{user.affiliation}</p> 
                                </>
                                : null }
                            </div>
                            <Link to={`/users/${user.id}/profile/edit`}>
                                <button>Edit Profile</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Profile>
        : null }
        </>
    )
}

export default UserProfile;