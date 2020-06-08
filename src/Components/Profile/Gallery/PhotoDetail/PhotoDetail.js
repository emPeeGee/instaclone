import React from 'react';
import axios from 'axios';

import './PhotoDetail.css';
import UserComment from "./RightPart/UserComment";
import UserInfo from "./RightPart/UserInfo";

class PhotoDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: {},
            loaded: false
        };

        this.id = props.match.params.id;
        this.getPhoto();

        document.body.style.overflow = "hidden"
    }

    componentWillUnmount() {
        document.body.style.overflow = "initial"
    }

    getPhoto = async () => {
        const response = await axios.get('https://api.unsplash.com/photos/' + this.id, {
            headers: {
                Authorization: 'Client-ID EqpguUI3vrKZAFR1P_kR60A755goVw2I0IKb_DkelUE'
            }
        });

        this.setState({ image: response.data, loaded: true });
    }

    goBack = (e) => {
        e.stopPropagation();
        this.props.history.push("/");
    }

    stayHere = (e) => {
        e.stopPropagation();
    }

    render() {

        let img = this.state.loaded === true ?
            <img src={this.state.image.urls.regular} className="left-part" alt="image"/> : <div></div>;

        return (
            <div className="photo-detail" onClick={this.goBack}>
                <div className="photo-detail__container" onClick={this.stayHere}>
                        <div className="left-part" >
                            {img}
                        </div>
                        <div className="right-part">
                            <UserInfo />
                            <UserComment />
                        </div>
                </div>
            </div>
        );
    }
}

export default PhotoDetail;