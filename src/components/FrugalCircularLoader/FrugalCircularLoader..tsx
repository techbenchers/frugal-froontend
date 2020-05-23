import React from 'react';
import './FrugalCircularLoader.css';
import {CircularProgress} from "@material-ui/core";

const MyCircularLoader = () => {
    return <div className="loading">
        <CircularProgress/>
    </div>
};

export const FrugalCircularLoader = React.memo(MyCircularLoader);
