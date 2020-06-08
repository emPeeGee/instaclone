import React from 'react';
import axios from 'axios';

import './PhotoDetail.css';

class PhotoDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: {},
            loaded: false
        };

        this.id = props.match.params.id;
        this.getPhoto();
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
        this.props.history.goBack();
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

                            <div className="user-info">
                                <div className="user-info__icon">
                                    <img src="profile_icon.jpg" />
                                </div>
                                <div className="user-info__caption">
                                    <p className="user-info__caption--title">ebsintegrator</p>
                                    <div className="user-info__caption--dot"></div>
                                    <p className="user-info__caption--follow">Follow</p>
                                </div>
                            </div>

                            <div className="user-comment">
                                <span className="user-comment--title">ebsintegrator</span>
                                <span>Greetings from</span>
                                <span className="user-comment--hashtag">#ebsintegrator's</span>
                                <span>new office!</span>
                                <span className="user-comment--hashtag">#newoffice</span>
                                <span className="user-comment--hashtag">#ebsoffice</span>
                                <span className="user-comment--hashtag">#officelife</span>
                                <span className="user-comment--hashtag">#officestyle</span>
                                <span className="user-comment--hashtag">#EBSteam</span>
                                <span className="user-comment--hashtag">#meetings</span>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default PhotoDetail;