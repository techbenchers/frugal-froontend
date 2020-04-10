import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {FrugalPostCard, FrugalPostCardProps} from "../FrugalPostCard/FrugalPostCard";
import paella from "../../static/images/paella.jpeg";

const frugal: FrugalPostCardProps = {
    img: paella,
    alt: "paella",
    title: "Shrimp and Chorizo Paella",
    date: "September 14, 2016",
    body: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.",
    author: "Aniket Singh"
};

export default class FrugalHome extends React.Component {
    render() {
        // const classes = useStyles();
        return (
            <div className="root">
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Paper className="paper">xs</Paper>
                    </Grid>
                    <Grid container item xs={8} spacing={2}>
                        <Grid item xs={8}>
                            <FrugalPostCard img={frugal.img} alt={frugal.alt} title={frugal.title} date={frugal.date} body={frugal.body} author={frugal.author}/>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className="paper">xs=4</Paper>
                        </Grid>
                    </Grid>
                    <Grid item xs>
                        <Paper className="paper">xs</Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
