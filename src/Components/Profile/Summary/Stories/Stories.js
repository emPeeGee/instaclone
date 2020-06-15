import React from 'react';

import Story from './Story';

import './Stories.css';

class Stories extends React.Component {
    render() {
        return(
            <div className="stories">
                <Story src={"story/story.jpg"} title={"Inside EBS"}/>
                <Story src={"story/party.jpg"} title={"Party"}/>
                <Story src={"story/events.jpg"} title={"Events"}/>
                <Story src={"story/ebs_people.jpg"} title={"EBS people"}/>
            </div>
        );
    }
}

export default Stories;
