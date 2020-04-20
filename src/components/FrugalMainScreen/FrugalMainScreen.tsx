import React, {Suspense} from 'react';
import {Route, RouteComponentProps, Switch, withRouter} from "react-router";
import './FrugalMainScreen.css';

const FrugalHome = React.lazy(() => import('../FrugalHome/FrugalHome'));
const FrugalBlogDisplayContainer = React.lazy(() => import('../FrugalBlogDisplay/FrugalBlogDisplay'));


export interface FrugalMainScreenProps {

}

export interface FrugalMainScreenState {

}


export default class FrugalMainScreen extends React.Component<FrugalMainScreenProps, FrugalMainScreenState> {


    render() {
        console.log('main screen called');
        return (
            <Switch>
                <Suspense fallback={<div>Loading...</div>}>
                    <Route exact path="/" children={<FrugalHome/>}/>
                    <Route path="/:id" children={<FrugalBlogDisplayContainer/>}/>
                </Suspense>
            </Switch>
        )
    }
}
