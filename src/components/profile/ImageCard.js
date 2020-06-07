import React from 'react';


class ImageCard extends React.Component {
    render() {
        return(
            <div>
                <img
                    ref={this.imageRef}  
                    src={this.props.image.urls.regular} 
                    alt={this.props.image.alt_description} />
            </div>
        );
    }
}

export default ImageCard;