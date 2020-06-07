import React from 'react';
import ProfileGallery from './profileGallery/ProfileGallery';
import './Profile.css';


class Profile extends React.Component {

    render() {
        return(
            <main className="container">
                <ProfileGallery />
            </main>
        );
    }
}

export default Profile;
