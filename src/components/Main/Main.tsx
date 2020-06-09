import React from 'react';
import Home from '../Home/Home';
import Header from "../Header";
import './Main.scss';


export interface MainProps {

}

export interface MainState {

}


export default class Main extends React.PureComponent<MainProps, MainState> {


    render() {
        return (
            <>
                <Header/>
                <Home/>
            </>
        )
    }
}
