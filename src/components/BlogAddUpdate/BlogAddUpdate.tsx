import React from 'react';
import {RouteComponentProps, withRouter} from "react-router";
import {connect} from 'react-redux'
import './BlogAddUpdate.scss';
import {Blog, StoreState} from '../../interface';

const FrugalEditor = React.lazy(() => import('../Editor'));

export interface BlogAddUpdateProps extends RouteComponentProps {
  data?: any;
}

export interface BlogAddUpdateState {
    edit: boolean;
}

class BlogAddUpdate extends React.Component<BlogAddUpdateProps, BlogAddUpdateState> {

    constructor(props: BlogAddUpdateProps) {
        super(props);
        this.state = {
            edit: false,
        }
    }

    componentDidMount(): void {
        this.verifyEditOrAdd();
    }

    verifyEditOrAdd = () => {
        let location = this.props.location;
        if (location.pathname.includes('edit')) {
            let blogUri: string = (this.props.match.params as any).id;
            console.log('behaving as edit component', blogUri);
            this.setState({edit: true});
        }
    };

    render() {
        const {edit} = this.state;
        const data = edit ? this.props.data : {};
        return (
            <div className="blog-edit-container">
                <FrugalEditor data={data}/>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState, props: BlogAddUpdateProps) => {
    let data = {};
    let location = props.location;
    if(location.pathname.includes('edit')) {
      const uri: string = (props.match.params as any).id;
      let blog: Blog = Object.values(state.blogState.blogs).find((b: Blog) => b.uri === uri) as Blog;
      data = JSON.parse(blog.body);
    }
    return {data};
};

export default withRouter(connect(mapStateToProps)(BlogAddUpdate));
