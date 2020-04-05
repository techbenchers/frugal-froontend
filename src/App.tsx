import React from 'react';
import './App.css';
import {FrugalHeader} from "./components/FrugalHeader/FrugalHeader";
import {withRouter} from "react-router-dom";

function App() {
    return (
        <>
            <FrugalHeader/>
        </>
    );
}

export default withRouter(App);
