import React from 'react';
import {Link} from "react-router-dom";

import './GalleryItem.css';

class GalleryItem extends React.Component {
    render() {
        return(
            <div className="gallery-item">
                <Link to={{ pathname: "/" + this.props.image.id }} >
                    <img
                        src={this.props.image.urls.regular}
                        alt={this.props.image.alt_description} />
                </Link>
            </div>
        );
    }
}

export default GalleryItem;
