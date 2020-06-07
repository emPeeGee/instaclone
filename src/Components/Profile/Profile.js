import React from 'react';
import Summary from './Summary/Summary';
import Gallery from './Gallery/Gallery';
import './Profile.css';
import GalleryType from "./GalleryType/GalleryType";


class Profile extends React.Component {

    render() {
        return(
            <main className="profile">
                <div className="profile__container">
                    <Summary />
                    <GalleryType />
                    <Gallery />
                </div>
            </main>
        );
    }
}

export default Profile;
