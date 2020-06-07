import React from 'react';
import Header from './Header/Header';
import Gallery from './Gallery/Gallery';
import './Profile.css';


class Profile extends React.Component {

    render() {
        return(
            <main className="container">
                <Header />
                <Gallery />
            </main>
        );
    }
}

export default Profile;
