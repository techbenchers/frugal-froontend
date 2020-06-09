import React from 'react';
import {withRouter} from "react-router-dom";
import Main from "./components/Main";
import './App.scss';

const App = () => {
    return (
        <>
            <Main/>
        </>
    );
}

export default withRouter(React.memo(App));
