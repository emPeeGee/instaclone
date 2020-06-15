import React from 'react';

import './SearchBar.css';

class SearchBar extends React.Component {

    render() {
        return(
            <div className="searchBar">
                <input
                    className="searchBar__input"
                    type="text"
                    placeholder="Search"/>
            </div>
        )
    }
}

export default SearchBar;
