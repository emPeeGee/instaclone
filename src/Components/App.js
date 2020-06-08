import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import Profile from './Profile/Profile';
import PhotoDetail from "./Profile/Gallery/PhotoDetail/PhotoDetail";

import './App.css';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Navigation />
                <Profile />

                <Switch>
                    <Route path="/:id" component={PhotoDetail} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;