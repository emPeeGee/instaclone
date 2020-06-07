import React from 'react';
import axios from 'axios';
import GalleryItem from './GalleryItem';
import './Gallery.css';

class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = { images: [] };
        this.onSearchSubmit();
    }

    onSearchSubmit = async () => {
        const response = await axios.get('https://api.unsplash.com/photos', {
            params: {page: 1, per_page: 21},
            headers: {
                Authorization: 'Client-ID EqpguUI3vrKZAFR1P_kR60A755goVw2I0IKb_DkelUE'
            }
        }); 

        this.setState({ images: response.data });
    }

    render() {
        const imgs = this.state.images.map(img => {
            return <GalleryItem key={img.id} image={img} />
        })

        return (
           <div className="container__gallery">
                <div className="gallery">{imgs}</div>
           </div>
        )
    }
}

export default Gallery;