import React from 'react';
import Header from './header/SearchBar';
import ImageList from './profile/ImageList';

class App extends React.Component {


    render() {
        return (
            <div>
                <Header  />
                <ImageList />
            </div>
        )
    }
};

export default App;