import React from 'react';
import ProfilePhoto from "./ProfilePhoto";
import ProfileInformation from "./ProfileInformation";
import ProfileStories from "./profileStories/ProfileStories";
import "./ProfileHeader.css";


class ProfileHeader extends React.Component {
    render() {
        return(
            <div>
               <div className="profile__header">
                   <ProfilePhoto />
                   <ProfileInformation />
               </div>

                <div>
                    <ProfileStories />
                </div>
            </div>

        )
    }
}

export default ProfileHeader;
