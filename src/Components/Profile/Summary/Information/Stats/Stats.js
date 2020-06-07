import React from 'react';

import './Stats.css';

class Stats extends React.Component {
    render() {
        return (
            <div className="stats">
                <span><b>103</b> posts</span>
                <span><b>168</b> followers</span>
                <span><b>174</b> following</span>
            </div>
        );
    }
}

export default Stats;