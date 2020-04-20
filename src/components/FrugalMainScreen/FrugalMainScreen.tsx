import React from 'react';
import './FrugalMainScreen.css';
import FrugalHome from "../FrugalHome/FrugalHome";
import {FrugalHeader} from "../FrugalHeader/FrugalHeader";


export interface FrugalMainScreenProps {

}

export interface FrugalMainScreenState {

}


export default class FrugalMainScreen extends React.Component<FrugalMainScreenProps, FrugalMainScreenState> {


    render() {
        console.log('main screen called');
        return (
            <>
                <FrugalHeader/>
                <FrugalHome/>
            </>
        )
    }
}
