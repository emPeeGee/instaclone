import React from 'react';

import './Description.css';

class Description extends React.Component {
    render() {
        return (
            <div className="description">
                <h4>EBS Integrator</h4>

                <ul type="square">
                    <li>MVP Builds</li>
                    <li>Feature Web and Mobile Production</li>
                    <li>Application Refactoring</li>
                    <li>System Redesign</li>
                </ul>

                <a href="https://ebs-integrator.com/">ebs-integrator.com</a>
            </div>
        );
    }
}

export default Description;
