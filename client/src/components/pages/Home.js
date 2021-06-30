import React from 'react';
import ProfilePhoto from '../profile/ProfilePhoto';
import ProfileInfo from '../profile/ProfileInfo';

const Home = () => {
    return (
        <div className="row first-row">
            <ProfilePhoto />
            <ProfileInfo />
        </div>
    )
}

export default Home;
