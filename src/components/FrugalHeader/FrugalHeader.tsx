import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import './FrugalHeader.css';
import {Link, useLocation} from "react-router-dom";
import {FrugalMenu} from "../FrugalMenu/FrugalMenu";


export interface FrugalHeaderProps {

}

export interface FrugalHeaderState {

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

export class FrugalHeader extends React.PureComponent<FrugalHeaderProps, FrugalHeaderState> {


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
                <AppBar position="sticky">
                    <Toolbar>
                        <Typography variant="h6" className="title">
                            <Link to="/">Blogs</Link>

                        </Typography>
                        <InputBase className="search" placeholder="Search"/>
                        <LoginButton/>
                        <this.UserProfile/>
                    </Toolbar>
                </AppBar>
            </>
        )
    }

}