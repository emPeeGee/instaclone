import React from 'react';
import ProfilePhoto from "./ProfilePhoto";
import ProfileInformation from "./ProfileInformation";
import "./ProfileHeader.css";


class ProfileHeader extends React.Component {
    render() {
        return(
            <div className="profile__header">
                <ProfilePhoto />
                <ProfileInformation />
            </div>
        )
    }
}

export default ProfileHeader;
