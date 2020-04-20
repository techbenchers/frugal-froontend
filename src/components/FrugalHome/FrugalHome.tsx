import React, {Suspense} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Hidden} from "@material-ui/core";
import {Route, RouteComponentProps, Switch, withRouter} from "react-router";
import Login from "../Login/Login";

const FrugalBlogDisplay = React.lazy(() => import('../FrugalBlogDisplay/FrugalBlogDisplay'));
const FrugalBlogContainer = React.lazy(() => import('../FrugalBlogContainer/FrugalBlogContainer'));

export interface FrugalHomeProps extends RouteComponentProps {

}

export interface FrugalHomeState {

}


class FrugalHome extends React.Component<FrugalHomeProps, FrugalHomeState> {
    render() {
        let location = this.props.location;
        // @ts-ignore
        let background = location.state && location.state.background;
        return (
            <div className="root">
                <Grid container spacing={3}>
                    <Hidden smDown>
                        <Grid item xs>
                            {/*<Paper className="paper">xs</Paper>*/}
                        </Grid>
                    </Hidden>

                    <Grid container item xs={12} md={6} spacing={2}>
                        <Grid item xs={12} zeroMinWidth>
                            <Suspense fallback={<div>Loading...</div>}>
                                <Switch location={background || location}>
                                    <Route exact path="/" children={<FrugalBlogContainer/>}/>
                                    <Route path="/blog/:id" children={<FrugalBlogDisplay/>}/>
                                </Switch>
                                <Route path="/login" children={<Login/>}/>
                            </Suspense>
                        </Grid>
                    </Grid>
                    <Hidden smDown>
                        <Grid item xs>
                            {/*<Paper className="paper">xs</Paper>*/}
                        </Grid>
                    </Hidden>
                </Grid>
            </div>
        );
    }
}

export default withRouter(FrugalHome);