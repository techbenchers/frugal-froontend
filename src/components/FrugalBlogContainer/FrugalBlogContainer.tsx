import React from 'react';
import './FrugalBlogContainer.css';
import {FrugalPostCard, FrugalPostCardProps} from "../FrugalPostCard/FrugalPostCard";
import paella from "../../static/images/paella.jpeg";


const frugal: FrugalPostCardProps = {
    uri: "Shrimp-and-Chorizo-Paella-123",
    img: paella,
    alt: "paella",
    title: "Shrimp and Chorizo Paella",
    date: "September 14, 2016",
    body: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.",
    author: "Aniket Singh"
};
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export interface FrugalBlogContainerProps {

}

export interface FrugalBlogContainerState {

}

export default class FrugalBlogContainer extends React.Component<FrugalBlogContainerProps, FrugalBlogContainerState> {
    render() {
        return (
            <>
                {
                    list.map((i: number) => <FrugalPostCard key={i} {...frugal}/>)
                }
            </>
        );
    }
}