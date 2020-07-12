import React from 'react';
import {connect, DispatchProp} from "react-redux";
import './Profile.scss';
import {StoreState, User} from "../../interface";
import {MyUserActions} from "../../store/actions";
import {Avatar, Box, Button} from "@material-ui/core";
import {Link, RouteComponentProps, withRouter} from "react-router-dom";
import {CircularLoader} from "../../shared/CircularLoader";
// import MyBlogs from "../MyBlogs";

export interface ProfileProps extends DispatchProp, RouteComponentProps {
    user: User;
    isLoading: boolean;
}

export interface ProfileState {

}

class Profile extends React.PureComponent<ProfileProps, ProfileState> {

    fetchData = () => {
        if (!this.props.user) {
            this.props.dispatch(MyUserActions.GetUser('', this.props.dispatch));
        }
    };

    componentDidMount(): void {
        if (!this.props.user) {
            this.fetchData();
        }
    }

    render() {
        console.log('profile component render props ', this.props);
        const {user, isLoading} = this.props;
        if (!user || isLoading) {
            return <CircularLoader/>
        }
        return <div className="profile-container">
            <Box className="profile">
                <Box display="flex" flexDirection="column" flexGrow="1">
                    <Box display="flex">
                        <Box>
                            <h2>{user.name}</h2>
                        </Box>
                        <Box>
                            <Link to={this.props.location.pathname + '/edit'}>
                                <Button variant="outlined">Edit Profile</Button>
                            </Link>
                        </Box>
                    </Box>
                    {/*<Box>8 followers</Box>*/}
                </Box>
                <Box>
                    <Avatar className="profile-avatar">SD</Avatar>
                </Box>
            </Box>
            {/*<Box className="my-blogs">*/}
            {/*    <MyBlogs/>*/}
            {/*</Box>*/}
        </div>
    }
}

const mapStateToProps = (state: StoreState) => {
    const user: User = Object.values<User>(state.userState.user)[0];
    const isLoading = state.userState.isLoading;
    return {user, isLoading};
};

export default withRouter(connect(mapStateToProps)(Profile));
