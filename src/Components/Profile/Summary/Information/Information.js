import React from 'react';

import './Information.css';
import Overview from "./Overview/Overview";
import Stats from "./Stats/Stats";
import Description from "./Description/Description";

class Information extends React.Component {
    render() {
        return(
            <div className="information">
                <Overview />
                <Stats />
                <Description />
            </div>
        );
    }
}

export default Information;