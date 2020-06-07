import React from 'react';

import './GalleryItem.css';

class GalleryItem extends React.Component {
    render() {
        return(
            <div className="gallery-item">
                <img
                    ref={this.imageRef}  
                    src={this.props.image.urls.regular} 
                    alt={this.props.image.alt_description} />
            </div>
        );
    }
}

export default GalleryItem;