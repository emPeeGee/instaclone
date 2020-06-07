import React from 'react';
import SearchBar from './SearchBar';

import './Header.css';

class Header extends React.Component {

    render() {
        return(
            <div>
                <SearchBar />
            </div>
        )
    }
}

export default Header;  