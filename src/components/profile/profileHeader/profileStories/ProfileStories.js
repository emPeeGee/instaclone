import React from "react";
import Story from './Story';

import './ProfileStories.css';

class ProfileStories extends React.Component {
    render() {
        return(
            <div className="profile__stories">
                <Story src={"story.jpg"} title={"Inside EBS"}/>
                <Story src={"party.jpg"} title={"Party"}/>
                <Story src={"story.jpg"} title={"Events"}/>
                <Story src={"party.jpg"} title={"EBS people"}/>
            </div>
        );
    }
}

export default ProfileStories;