import React from 'react'
import profilePhoto from './zhaoningcai.jpg';

const ProfilePhoto = () => {
    return (
        <div className="col s8 m5 l3 offset-s2 text-center">
            <img className="profile-photo" src={profilePhoto} />
            <p className="flow-text">Zhaoning(Kyle) Cai</p>
        </div>
    )
}

export default ProfilePhoto;
