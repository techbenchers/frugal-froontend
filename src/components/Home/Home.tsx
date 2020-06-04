import React, {Suspense} from 'react';
import {Route, RouteComponentProps, Switch, withRouter} from "react-router";
import './Home.css';
import {Fab, Hidden, Grid} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import {Link} from "react-router-dom";
import {CircularLoader} from "../CircularLoader";

const BlogView = React.lazy(() => import('../BlogView'));
const BlogListContainer = React.lazy(() => import('../BlogListContainer'));
const BlogAddUpdate = React.lazy(() => import('../BlogAddUpdate'));
const Login = React.lazy(() => import('../Login'));

export interface HomeProps extends RouteComponentProps {

}

export interface HomeState {

}


class Home extends React.Component<HomeProps, HomeState> {
    render() {
        let location = this.props.location;
        // @ts-ignore
        let background = location.state && location.state.background;
        return (
            <div className="root">
                <Grid container className="grid-container">
                    <Hidden smDown>
                        <Grid item xs/>
                    </Hidden>

                    <Grid container item xs={12} md={6}>
                        <Grid item xs={12} zeroMinWidth>
                            <Suspense fallback={<CircularLoader/>}>
                                <Switch location={background || location}>
                                    <Route exact path="/" children={<BlogListContainer/>}/>
                                    <Route exact path="/blog/:id" children={<BlogView/>}/>
                                    <Route path="/blog/:id/edit" children={<BlogAddUpdate/>}/>
                                    <Route path="/new" children={<BlogAddUpdate/>}/>
                                </Switch>
                                <Route path="/login" children={<Login/>}/>
                            </Suspense>
                        </Grid>
                    </Grid>
                    <Hidden smDown>
                        <Grid item xs/>
                    </Hidden>
                </Grid>
                {!this.props.location.pathname.includes("new") && (
                    <Link to="/new">
                        <Fab className="new-post">
                            <AddIcon/>
                        </Fab>
                    </Link>)}
            </div>
        );
    }
}

export default withRouter(Home);
