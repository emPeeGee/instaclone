import React from 'react';
import './ImageList.css';

class ImageList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { images: [] };
        this.onSearchSubmit();
    }

    onSearchSubmit = async () => {
    }

    render() {
        const imgs = [];

        return (
           <div className="container__list">
                <div className="image__list">{imgs}</div>
           </div>
        )
    }
}

export default ImageList;