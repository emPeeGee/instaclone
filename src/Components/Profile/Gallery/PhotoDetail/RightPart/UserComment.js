import React from 'react';

import './UserComment.css';

class UserComment extends React.Component{
    render() {
        return (
            <div className="user-comment">
                <span className="user-comment--title">ebsintegrator</span>
                <span>Greetings from</span>
                <span className="user-comment--hashtag">#ebsintegrator's</span>
                <span>new office!</span>
                <span className="user-comment--hashtag">#newoffice</span>
                <span className="user-comment--hashtag">#ebsoffice</span>
                <span className="user-comment--hashtag">#officelife</span>
                <span className="user-comment--hashtag">#officestyle</span>
                <span className="user-comment--hashtag">#EBSteam</span>
                <span className="user-comment--hashtag">#meetings</span>
            </div>
        );
    }
}

export default UserComment;