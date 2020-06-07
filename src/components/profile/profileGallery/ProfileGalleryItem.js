import React from 'react';


class ProfileGalleryItem extends React.Component {
    render() {
        return(
            <div className="gallery__item">
                <img
                    ref={this.imageRef}  
                    src={this.props.image.urls.regular} 
                    alt={this.props.image.alt_description} />
            </div>
        );
    }
}

export default ProfileGalleryItem;