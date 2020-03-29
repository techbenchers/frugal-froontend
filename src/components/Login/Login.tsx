import React from 'react';
import {Button} from "@material-ui/core";
import {FrugalDialog} from "../FrugalDialog/FrugalDialog";
import './Login.css';
import google from '../../google.png';
import github from '../../github.png';

export interface LoginProps {

}

export interface LoginState {

}


export class Login extends React.PureComponent<LoginProps, LoginState> {


    render() {
        return (
            <FrugalDialog title={'Sign In'} open={true}>
                <div className='button-container'>
                    <Button startIcon={<img src={google} alt='Google logo'/>} variant='outlined'>Login with
                        Google</Button>
                    <Button startIcon={<img src={github} alt='Github logo'/>} variant='outlined'>Login with
                        Github</Button>
                </div>
            </FrugalDialog>
        )
    }
}