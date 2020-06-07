import React from "react";
import './Header.css';

class Photo extends React.Component {
    render() {
        return(
            <div className="profile__photo">
                <img src="logo192.png"  alt="Icon"/>
            </div>
        );
    }
}

export default Photo;