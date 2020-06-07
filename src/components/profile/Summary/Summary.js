import React from 'react';

import Icon from './Icon/Icon';
import Information from './Information/Information';
import Stories from './Stories/Stories';

import "./Summary.css";


class Summary extends React.Component {
    render() {
        return(
            <div className="summary">
               <div className="summary__dashboard">
                   <Icon />
                   <Information />
               </div>

                <div>
                    <Stories />
                </div>
            </div>

        )
    }
}

export default Summary;
