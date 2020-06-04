import React from 'react';
import './Main.css';
import Home from '../Home/Home';
import Header from "../Header";


export interface MainProps {

}

export interface MainState {

}


export default class Main extends React.Component<MainProps, MainState> {


    render() {
        return (
            <>
                <Header/>
                <Home/>
            </>
        )
    }
}
