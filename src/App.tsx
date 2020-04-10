import React from 'react';
import './App.css';
import {FrugalHeader} from "./components/FrugalHeader/FrugalHeader";
import {FrugalPostCard} from "./components/FrugalPostCard/FrugalPostCard";
import {withRouter} from "react-router-dom";
import paella from "./static/images/paella.jpeg"
import {FrugalPostCardProps} from "./components/FrugalPostCard/FrugalPostCard"
import FrugalHome from "./components/FrugalHome/FrugalHome";

const frugal: FrugalPostCardProps = {
    img: paella,
    alt: "paella",
    title: "Shrimp and Chorizo Paella",
    date: "September 14, 2016",
    body: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.",
    author: "Aniket Singh"
};

function App() {
    return (
        <>
            <FrugalHome/>
        </>
    );
}

export default withRouter(App);
