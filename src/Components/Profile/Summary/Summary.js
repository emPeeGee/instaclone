import React from 'react';

import Icon from './Icon/Icon';
import Information from './Information/Information';
import Stories from './Stories/Stories';

import "./Summary.css";
import Stats from "./Information/Stats/Stats";


class Summary extends React.Component {

    constructor(props) {
        super(props);

        this.mediaQuery = {
            tablet: 768,
        };

        this.state = {
            windowWidth: null
        };
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({windowWidth: document.body.clientWidth})
        });
    }


    render() {
        let stats = <div />
        if (this.state.windowWidth < this.mediaQuery.tablet) {
            stats = <Stats />
        }

        return(
            <div className="summary">
               <div className="summary__dashboard">
                   <Icon />
                   <Information />
               </div>

                <div>
                    <Stories />
                    {stats}
                </div>
            </div>

        )
    }
}

export default Summary;
