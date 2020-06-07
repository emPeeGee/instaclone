import React from "react";
import './ProfileHeader.css';

class ProfilePhoto extends React.Component {
    render() {
        return(
            <div className="profile__photo">
                <img src="logo192.png"  alt="Icon"/>
            </div>
        );
    }
}

export default ProfilePhoto;