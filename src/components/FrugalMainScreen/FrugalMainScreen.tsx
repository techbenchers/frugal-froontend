import React from 'react';
import './FrugalMainScreen.css';
import FrugalHome from "../FrugalHome/FrugalHome";
import {default as FrugalHeader} from "../FrugalHeader/FrugalHeader";


export interface FrugalMainScreenProps {

}

export interface FrugalMainScreenState {

}


export default class FrugalMainScreen extends React.Component<FrugalMainScreenProps, FrugalMainScreenState> {


    render() {
        return (
            <>
                <FrugalHeader/>
                <FrugalHome/>
            </>
        )
    }
}
