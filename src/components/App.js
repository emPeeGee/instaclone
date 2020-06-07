import React from 'react';
import Header from './header/SearchBar';
import Profile from './profile/Profile';

class App extends React.Component {


    render() {
        return (
            <div>
                <Header />
                <Profile />
            </div>
        )
    }
};

export default App;