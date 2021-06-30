import React from 'react';
import ProfilePhoto from '../profile/ProfilePhoto';
import ProfileInfo from '../profile/ProfileInfo';
import ProfileQuality from '../profile/ProfileQuality';

const Home = () => {
    return (
        <div className="row first-row">
            <ProfilePhoto />
            <ProfileInfo />
            <ProfileQuality />
        </div>
    )
}

export default Home;
