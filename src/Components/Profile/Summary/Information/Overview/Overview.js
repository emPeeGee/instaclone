import React from 'react';

import './Overview.css';

class Overview extends React.Component {
    render() {
        return (
            <div className="overview">
                <p>ebsintegrator</p>
                <button className="overview__btn overview__btn--follow">Follow</button>
                <button className="overview__btn overview__btn--recommendation">.</button>
                <button className="overview__more">...</button>
            </div>
        );
    }
}

export default Overview;
