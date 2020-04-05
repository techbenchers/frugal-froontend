import React from 'react';
import {Button} from "@material-ui/core";
import {FrugalDialog} from "../FrugalDialog/FrugalDialog";
import './Login.css';
import google from '../../google.png';
import github from '../../github.png';
import {Redirect} from "react-router";

export interface LoginProps {
}

export interface LoginState {
    open?: boolean;
}


export default class Login extends React.PureComponent<LoginProps, LoginState> {

    constructor(props: LoginProps) {
        super(props);
        this.state = {
            open: true
        }
    }


    onBackdropClick = () => {
        this.setState({open: false});
    };

    render() {
        return (
            <>
                <FrugalDialog onBackdropClick={this.onBackdropClick} title={'Sign In'} open={this.state.open || false}>
                    <div className='button-container'>
                        <Button startIcon={<img src={google} alt='Google logo'/>} variant='outlined'>Login with
                            Google</Button>
                        <Button startIcon={<img src={github} alt='Github logo'/>} variant='outlined'>Login with
                            Github</Button>
                    </div>
                </FrugalDialog>
                {!this.state.open && <Redirect to="/"/>}
            </>
        )
    }
}