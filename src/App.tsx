import React from 'react';
import Main from "./components/Main";
import './App.scss';
import {connect, DispatchProp} from "react-redux";
import {StoreState, User} from "./interface";
import {MyUserActions} from "./store/actions";

export interface AppProps extends DispatchProp {
    user: User;
}

const fetchUser = (props: AppProps) => {
    if (!props.user) {
        props.dispatch(MyUserActions.GetUser('', props.dispatch));
    }
};

const App = (props: AppProps) => {
    fetchUser(props);
    return (
        <>
            <Main/>
        </>
    );
};

const mapStatetToProps = (state: StoreState) => {
    return {user: Object.values(state.userState.user)[0]};
};

export default connect(mapStatetToProps)(React.memo(App));
