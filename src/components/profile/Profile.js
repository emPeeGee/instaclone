import React from 'react';
import ProfileHeader from './profileHeader/ProfileHeader';
import ProfileGallery from './profileGallery/ProfileGallery';
import './Profile.css';


class Profile extends React.Component {

    render() {
        return(
            <main className="container">
                <ProfileHeader />
                <ProfileGallery />
            </main>
        );
    }
}

export default Profile;
