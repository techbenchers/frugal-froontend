import React from 'react';
import './App.css';
import {FrugalHeader} from "./components/FrugalHeader/FrugalHeader";
import RecipeReviewCard from "./components/FrugalPostCard/FrugalPostCard";
import {withRouter} from "react-router-dom";

function App() {
    return (
        <>
            <RecipeReviewCard/>
        </>
    );
}

export default withRouter(App);
