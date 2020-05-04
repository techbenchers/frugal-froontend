import React from 'react';
import {RouteComponentProps, withRouter} from "react-router";
import './FrugalBlogEdit.css';
import {FrugalEditor} from "../FrugalEditor/FrugalEditor";

export interface FrugalBlogEditProps extends RouteComponentProps {

}

export interface FrugalBlogEditState {
    edit: boolean;
}

class FrugalBlogEdit extends React.Component<FrugalBlogEditProps, FrugalBlogEditState> {

    constructor(props: FrugalBlogEditProps) {
        super(props);
        this.state = {
            edit: false,
        }
    }

    componentDidMount(): void {
        this.verifyEditOrPost();
    }

    verifyEditOrPost = () => {
        let location = this.props.location;
        if (location.pathname.includes('edit')) {
            console.log('behaving as edit component');
            this.setState({edit: true});
        }
    };

    render() {
        return (
            <div className="blog-edit-container">
                <FrugalEditor/>
            </div>
        );
    };
};

export default withRouter(FrugalBlogEdit);