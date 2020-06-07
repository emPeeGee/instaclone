import React from 'react';
import axios from 'axios';
import ImageCard from './ImageCard';
import './ImageList.css';

class ImageList extends React.Component {

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
            return <ImageCard key={img.id} image={img} />
        })

        return (
           <div className="container__list">
                <div className="image__list">{imgs}</div>
           </div>
        )
    }
}

export default ImageList;