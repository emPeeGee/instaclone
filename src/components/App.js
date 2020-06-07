import React from 'react';
import Navigation from './Navigation/Navigation';
import Profile from './profile/Profile';
import './App.css';

class App extends React.Component {


    render() {
        return (
            <div>
                <Navigation />
                <Profile />
            </div>
        )
    }
};

export default App;