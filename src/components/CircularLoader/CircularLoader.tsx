import React from 'react';
import './CircularLoader.css';
import {CircularProgress} from "@material-ui/core";

const Loader = () => {
    return <div className="loading">
        <CircularProgress/>
    </div>
};

export const CircularLoader = React.memo(Loader);
