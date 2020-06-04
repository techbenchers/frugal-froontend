import React from 'react';
import './Main.css';
import Home from "../Home/Home";
import {default as Header} from "../Header/Header";


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
