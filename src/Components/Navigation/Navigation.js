import React from 'react';

import SearchBar from './SearchBar/SearchBar';
import Title from './Title/Title';
import InteractiveButtons from './InteractiveButtons/InteractiveButtons';

import './Navigation.css';

class Navigation extends React.Component {

    render() {
        return(
            <div className="header">
               <div className="header__container">
                   <Title />
                   <SearchBar />
                   <InteractiveButtons />
               </div>
            </div>
        )
    }
}

export default Navigation;
