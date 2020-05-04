import React, {Suspense} from 'react';
import Grid from '@material-ui/core/Grid';
import {Fab, Hidden} from "@material-ui/core";
import {Route, RouteComponentProps, Switch, withRouter} from "react-router";
import Login from "../Login/Login";
import './FrugalHome.css';
import AddIcon from '@material-ui/icons/Add';
import {Link} from "react-router-dom";

const FrugalBlogDisplay = React.lazy(() => import('../FrugalBlogDisplay/FrugalBlogDisplay'));
const FrugalBlogContainer = React.lazy(() => import('../FrugalBlogContainer/FrugalBlogContainer'));
const FrugalBlogEdit = React.lazy(() => import('../FrugalBlogEdit/FrugalBlogEdit'));

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
                        <Grid item xs/>
                    </Hidden>

                    <Grid container item xs={12} md={6} spacing={2}>
                        <Grid item xs={12} zeroMinWidth>
                            <Suspense fallback={<div>Loading...</div>}>
                                <Switch location={background || location}>
                                    <Route exact path="/" children={<FrugalBlogContainer/>}/>
                                    <Route exact path="/blog/:id" children={<FrugalBlogDisplay/>}/>
                                    <Route path="/blog/:id/edit" children={<FrugalBlogEdit/>}/>
                                    <Route path="/new" children={<FrugalBlogEdit/>}/>
                                </Switch>
                                <Route path="/login" children={<Login/>}/>
                            </Suspense>
                        </Grid>
                    </Grid>
                    <Hidden smDown>
                        <Grid item xs/>
                    </Hidden>
                </Grid>
                <Link to="/new">
                    <Fab className="new-post" variant="extended">
                        <AddIcon/>
                        New
                    </Fab>
                </Link>
            </div>
        );
    }
}

export default withRouter(FrugalHome);