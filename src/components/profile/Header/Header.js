import React from 'react';
import Photo from "./Photo";
import Information from "./Information";
import Stories from "./Stories/Stories";
import "./Header.css";


class Header extends React.Component {
    render() {
        return(
            <div>
               <div className="profile__header">
                   <Photo />
                   <Information />
               </div>

                <div>
                    <Stories />
                </div>
            </div>

        )
    }
}

export default Header;
