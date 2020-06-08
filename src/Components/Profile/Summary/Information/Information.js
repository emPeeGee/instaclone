import React from 'react';

import './Information.css';
import Overview from "./Overview/Overview";
import Stats from "./Stats/Stats";
import Description from "./Description/Description";

class Information extends React.Component {

    constructor(props) {
        super(props);

        this.mediaQuery = {
            tablet: 768,
        };

        this.state = {
            windowWidth: null
        };
    }

    componentDidMount = () => {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ windowWidth: window.innerWidth});
    }

    render() {
        let stats = <Stats />
        if (this.state.windowWidth < this.mediaQuery.tablet) {
            stats = <div></div>
        }

        return(
            <div className="information">
                <Overview />
                {stats}
                <Description />
            </div>
        );
    }
}

export default Information;