import React from 'react';

import './UserInfo.css';

class UserInfo extends React.Component {
    render() {
        return (
            <div className="user-info">
                <div className="user-info__icon">
                    <img src="profile_icon.jpg" alt="profile icon" />
                </div>
                <div className="user-info__caption">
                    <p className="user-info__caption--title">ebsintegrator</p>
                    <div className="user-info__caption--dot"></div>
                    <p className="user-info__caption--follow">Follow</p>
                </div>
            </div>
        );
    }
}

export default UserInfo;
