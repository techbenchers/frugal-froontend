import React from 'react';
import './App.css';
import {FrugalEditor} from "./components/FrugalEditor/FrugalEditor";

function App() {
    let editor: any;

    return (
        <div className="container">
            <FrugalEditor getRef={(e: any) => {
                editor = e;
            }}/>
        </div>
    );
}

export default App;
