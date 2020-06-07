import React from 'react';
import axios from 'axios';
import ProfileGalleryItem from './ProfileGalleryItem';
import './ProfileGallery.css';

class ProfileGallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = { images: [] };
        this.onSearchSubmit();
    }

    onSearchSubmit = async () => {
        const response = await axios.get('https://api.unsplash.com/photos', {
            params: {page: 1, per_page: 20},
            headers: {
                Authorization: 'Client-ID EqpguUI3vrKZAFR1P_kR60A755goVw2I0IKb_DkelUE'
            }
        }); 

        this.setState({ images: response.data });
    }

    render() {
        const imgs = this.state.images.map(img => {
            return <ProfileGalleryItem key={img.id} image={img} />
        })

        return (
           <div className="container__gallery">
                <div className="gallery">{imgs}</div>
           </div>
        )
    }
}

export default ProfileGallery;