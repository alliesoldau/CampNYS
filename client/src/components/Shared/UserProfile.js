import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContext'
import Profile from '../../styles/Profile'

// TO DO: delete CamperProfile and UserProfile files if you dont end up using them 

function UserProfile() {

    const { user } = useContext(UserContext);

    return  (
        <Profile>
            <div className="header">
                <h2 className="flourish">|</h2>
                    <h2>{user.first_name}'s Profile</h2>
                <h2 className="flourish">|</h2>
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
                </div>
            </div>
        </Profile>
    )
}

export default UserProfile;