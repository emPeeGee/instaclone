import React from 'react';


class ImageCard extends React.Component {
    render() {
        return(
            <div className="image__card">
                <img
                    ref={this.imageRef}  
                    src={this.props.image.urls.regular} 
                    alt={this.props.image.alt_description} />
            </div>
        );
    }
}

export default ImageCard;