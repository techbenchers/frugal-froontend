import React from 'react';
import './App.css';
import {withRouter} from "react-router-dom";
import FrugalMainScreen from "./components/FrugalMainScreen/FrugalMainScreen";


function App() {
    return (
        <>
            <FrugalMainScreen/>
        </>
    );
}

export default withRouter(App);
