import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Hidden} from "@material-ui/core";
import {FrugalBlogContainer} from "../FrugalBlogContainer/FrugalBlogContainer";


export default class FrugalHome extends React.Component {
    render() {
        // const classes = useStyles();
        return (
            <div className="root">
                <Grid container spacing={3}>
                    <Hidden smDown>
                        <Grid item xs>
                            <Paper className="paper">xs</Paper>
                        </Grid>
                    </Hidden>

                    <Grid container item xs={12} md={6} spacing={2}>
                        <Grid item xs={12} zeroMinWidth>
                            <FrugalBlogContainer/>
                        </Grid>
                    </Grid>
                    <Hidden smDown>
                        <Grid item xs>
                            <Paper className="paper">xs</Paper>
                        </Grid>
                    </Hidden>
                </Grid>
            </div>
        );
    }
}
