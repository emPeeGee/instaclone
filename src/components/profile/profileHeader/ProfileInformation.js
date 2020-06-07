import React from "react";

class ProfileInformation extends React.Component {
    render() {
        return(
            <div className="profile__information">
                <h3>ebsintegrator <button>Follow</button> <button>.</button></h3>

                <div>
                    <span>103 posts</span>
                    <span>168 followers</span>
                    <span>174 following</span>
                </div>

                <div>
                    <h5>EBS Integrator</h5>

                    <ul>
                        <li>MVP Builds</li>
                        <li>Feature Web and Mobile Production</li>
                        <li>Application Refactoring</li>
                        <li>System Redesign</li>
                    </ul>

                    <a href="google.com">ebs-integrator.com</a>
                </div>
            </div>
        );
    }
}

export default ProfileInformation;