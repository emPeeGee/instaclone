import React from 'react';

import './MyProfileButton.css';

class MyProfileButton extends React.Component {
    render() {
        return (
            <a href="# " className="my-profile-button">
                <img
                    src="profile_icon.jpg"
                    alt="ebs integratos's" />
            </a>
        );
    }
}

export default MyProfileButton;
