import React from 'react';
import {connect} from "react-redux";
import './Profile.scss';

export interface ProfileProps {

}

export interface ProfileState {

}

class Profile extends React.PureComponent<ProfileProps, ProfileState> {

    render() {
        return <div>Profile component</div>
    }
}

const mapStateToProps = () => {
    return {}
};

export default connect(mapStateToProps)(Profile);
