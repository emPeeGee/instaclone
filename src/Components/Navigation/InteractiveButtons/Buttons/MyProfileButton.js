import React from 'react';

import './MyProfileButton.css';

class MyProfileButton extends React.Component {
    render() {
        return (
            <a href="#" className="my-profile-button">
                <img
                    alt="ebs integratos's profile picture"
                    src="profile_icon.jpg" />
            </a>
        );
    }
}

export default MyProfileButton;
