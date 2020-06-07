import React from "react";

class Story extends React.Component {

    render() {
        return(
            <div className="story">
                <div className="story__border">
                    <img src={this.props.src} alt="Photo"/>
                </div>
                <p><b>{this.props.title}</b></p>
            </div>
        );
    }
}

export default Story;