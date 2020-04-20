import React from 'react';
import './FrugalBlogDisplay.css';
import {RouteComponentProps, useParams, withRouter} from "react-router";


export interface FrugalBlogDisplayProps extends RouteComponentProps {
}

export interface FrugalBlogDisplayState {

}


class FrugalBlogDisplay extends React.PureComponent<FrugalBlogDisplayProps, FrugalBlogDisplayState> {

    render() {
        console.log('props ', this.props);
        return (
            <>

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic id sequi voluptates. Distinctio eveniet
                explicabo illo incidunt quaerat quisquam quos sequi tenetur velit voluptas? Adipisci delectus expedita
                inventore placeat sapiente?

                {/*Blog id is {id}*/}

            </>
        );
    }

}

export default withRouter(FrugalBlogDisplay);