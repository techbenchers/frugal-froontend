import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default class AutoGrid extends React.Component {
    render() {
        // const classes = useStyles();
        return (
            <div className="root">
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Paper className="paper">xs</Paper>
                    </Grid>
                    <Grid item xs={8}>
                        <Paper className="paper">xs=8</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className="paper">xs</Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
