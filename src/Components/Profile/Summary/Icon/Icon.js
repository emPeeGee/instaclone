import React from 'react';

import './Icon.css';

class Icon extends React.Component {
    render() {
        return(
            <div className="icon">
                <div className="icon__border">
                    <img src="profile_icon.jpg"  alt="Icon"/>
                </div>
            </div>
        );
    }
}

export default Icon;