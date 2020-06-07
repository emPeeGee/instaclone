import React from 'react';
import Header from './Header/Header';
import Profile from './profile/Profile';
import './App.css';

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