import React from 'react';

import Icon from './Icon/Icon';
import Information from './Information/Information';
import Stories from './Stories/Stories';

import "./Header.css";


class Header extends React.Component {
    render() {
        return(
            <div className="header">
               <div className="header__dashboard">
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

export default Header;
