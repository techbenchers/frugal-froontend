import React from 'react';
import {CircularProgress} from "@material-ui/core";
import './CircularLoader.scss';

const Loader = () => {
    return <div className="loading">
        <CircularProgress/>
    </div>
};

export const CircularLoader = React.memo(Loader);
