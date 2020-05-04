import React from 'react';
import {Button} from "@material-ui/core";
import {FrugalDialog} from "../FrugalDialog/FrugalDialog";
import './Login.css';
import google from '../../static/images/logo/google.png';
import github from '../../static/images/logo/github.png';
import {Redirect, RouteComponentProps, withRouter} from "react-router";

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
                <FrugalDialog onBackdropClick={this.onBackdropClick} title={'Sign In'} open={this.state.open}>
                    <div className='button-container'>
                        <Button startIcon={<img src={google} alt='Google logo'/>} variant='outlined'>Login with
                            Google</Button>
                        <Button startIcon={<img src={github} alt='Github logo'/>} variant='outlined'>Login with
                            Github</Button>
                    </div>
                </FrugalDialog>
            </>
        )
    }
}

export default withRouter(Login);