import React from 'react';
import './App.css';
import {withRouter} from "react-router-dom";
import Main from "./components/Main/Main";

function App() {
    return (
        <>
            <Main/>
        </>
    );
}

export default withRouter(App);
