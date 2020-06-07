import React from 'react';

import './MyProfileButton.css';

class MyProfileButton extends React.Component {
    render() {
        return (
            <a href="#" className="my-profile-button">
                <img
                    alt="eempeegee's profile picture"
                    src="profile_logo.jpg" />
            </a>
        );
    }
}

export default MyProfileButton;