import React from 'react';

import DirectButton from "./Buttons/DirectButton";
import HomeButton from "./Buttons/HomeButton";
import ExploreButton from "./Buttons/ExploreButton";
import ActivityButton from "./Buttons/ActivityButton";
import MyProfileButton from "./Buttons/MyProfileButton";

import "./InteractiveButtons.css";

class InteractiveButtons extends React.Component {
    render() {
        return (
            <div className="interactiveButtons">
                <div className="interactiveButtons__container">
                    <HomeButton />
                    <DirectButton />
                    <ExploreButton />
                    <ActivityButton />
                    <MyProfileButton />
                </div>
            </div>
        );
    }
}

export default InteractiveButtons;