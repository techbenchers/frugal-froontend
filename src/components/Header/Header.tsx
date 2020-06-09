import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import {Link, useLocation} from "react-router-dom";
import {Menu} from "../Menu";
import {connect} from 'react-redux';
import {StoreState, User} from '../../interface';
import './Header.scss';


export interface HeaderProps {
    user: User;
}

export interface HeaderState {

}

export const LoginButton = (props: any) => {
    const location = useLocation();
    return (
        <Link to={{
            pathname: "/login",
            state: {background: location}
        }}>
            <Button color="inherit">Login</Button>
        </Link>
    );
};

class Header extends React.PureComponent<HeaderProps, HeaderState> {


    UserProfile = () => {

        const options: any[] = [
            {
                label: 'Profile',
                link: '/profile'
            },
            {
                label: 'Logout',
                link: '/logout'
            }
        ];

        return (
            <Menu options={options}/>
        )
    };


    render() {
        let {user} = this.props;
        return (
            <>
                <AppBar position="sticky">
                    <Toolbar>
                        <Typography variant="h6" className="title">
                            <Link to="/">Blogs</Link>
                        </Typography>
                        <InputBase className="search" placeholder="Search"/>
                        {!user && <LoginButton/>}
                        {!!user && <this.UserProfile/>}
                    </Toolbar>
                </AppBar>
            </>
        )
    }
}

const mapStateToProps = (state: StoreState) => {
    let user: User = Object.values<User>(state.userState.user)[0];
    return {user: user};
};

export default connect(mapStateToProps)(Header);
