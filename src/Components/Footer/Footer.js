import React from 'react';

import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
                <footer className="footer">
                    <div className="footer__container">
                        <ul>
                            <li>ABOUT</li>
                            <li>HELP</li>
                            <li>PRESS</li>
                            <li>API</li>
                            <li>JOBS</li>
                            <li>PRIVACY</li>
                            <li>TERMS</li>
                            <li>LOCATIONS</li>
                            <li>TOP ACCOUNTS</li>
                            <li>HASHTAGS</li>
                            <li>LANGUAGE</li>
                        </ul>

                        <span>@2020 INSTACLONE FROM emPeeGee</span>
                    </div>
                </footer>
        )
    }
}

export default Footer;