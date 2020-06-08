import React from 'react';

import Story from './Story';

import './Stories.css';

class Stories extends React.Component {
    render() {
        return(
            <div className="stories">
                <Story src={"story.jpg"} title={"Inside EBS"}/>
                <Story src={"party.jpg"} title={"Party"}/>
                <Story src={"events.jpg"} title={"Events"}/>
                <Story src={"ebs_people.jpg"} title={"EBS people"}/>
            </div>
        );
    }
}

export default Stories;
