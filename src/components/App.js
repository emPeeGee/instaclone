import React from 'react';
import axios from 'axios';
import Header from './header/SearchBar';
import ImageList from './profile/ImageList';

class App extends React.Component {

    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/photos', {
            params: {page: 1, per_page: 20},
            headers: {
                Authorization: 'Client-ID EqpguUI3vrKZAFR1P_kR60A755goVw2I0IKb_DkelUE'
            }
        }); 

        console.log(response);
        this.setState({ images: response.data });
    }

    render() {
        return (
            <div>
                <Header userSubmit={this.onSearchSubmit} />
                <ImageList foundImages={this.state.images} />
            </div>
        )
    }
};

export default App;