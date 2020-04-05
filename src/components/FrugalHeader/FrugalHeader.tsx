import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import './FrugalHeader.css';
import {Link, Route} from "react-router-dom";
import {FrugalMenu} from "../FrugalMenu/FrugalMenu";
// import {Login} from "../Login/Login";

const Login = React.lazy(() => import('../Login/Login'));

export interface FrugalHeaderProps {

}

export interface FrugalHeaderState {

}

export class FrugalHeader extends React.PureComponent<FrugalHeaderProps, FrugalHeaderState> {

    LoginButton = () => {
        return (
            <Link to="/login">
                <Button color="inherit">Login</Button>
            </Link>
        );
    };

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
            <FrugalMenu options={options}/>
        )
    };


    render() {
        return (
            <>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className="title">
                            Blogs
                        </Typography>
                        <InputBase className="search" placeholder="Search"/>
                        {/*<this.LoginButton/>*/}
                        <this.UserProfile/>
                    </Toolbar>
                </AppBar>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Route path="/login"><Login/></Route>
                </React.Suspense>
            </>
        )
    }

}