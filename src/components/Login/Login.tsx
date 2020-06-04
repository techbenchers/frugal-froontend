import React from 'react';
import {Button, Link} from "@material-ui/core";
import {Dialog} from "../Dialog/Dialog";
import './Login.css';
import google from '../../static/images/logo/google.png';
import github from '../../static/images/logo/github.png';
import {RouteComponentProps, withRouter} from "react-router";

const loginUrl = {
    google: '/oauth2/authorization/google',
    github: '/oauth2/authorization/github'
};

export interface LoginProps extends RouteComponentProps {
}

export interface LoginState {
    open: boolean;
}


class Login extends React.PureComponent<LoginProps, LoginState> {

    constructor(props: LoginProps) {
        super(props);
        this.state = {
            open: true
        }
    }


    onBackdropClick = (e: any) => {
        e.stopPropagation();
        this.props.history.goBack();
    };

    render() {
        return (
            <>
                <Dialog onBackdropClick={this.onBackdropClick} title={'Sign In'} open={this.state.open}>
                    <div className='button-container'>
                        <Link href={loginUrl.google}>
                            <Button startIcon={<img src={google} alt='Google logo'/>} variant='outlined'>
                                Login with Google
                            </Button>
                        </Link>
                        <Link href={loginUrl.github}>
                            <Button startIcon={<img src={github} alt='Github logo'/>} variant='outlined'>
                                Login with Github
                            </Button>
                        </Link>
                    </div>
                </Dialog>
            </>
        )
    }
}

export default withRouter(Login);
