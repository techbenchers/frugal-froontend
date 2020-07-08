import React from 'react';
import {RouteComponentProps, withRouter} from "react-router";
import {connect, DispatchProp} from 'react-redux'
import './BlogAddUpdate.scss';
import {Blog, StoreState} from '../../interface';
import {CircularLoader} from "../CircularLoader";
import {MyBlogActions} from "../../store/actions";

const FrugalEditor = React.lazy(() => import('../Editor'));

export interface BlogAddUpdateProps extends RouteComponentProps, Partial<DispatchProp> {
    blog?: Blog;
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

    fetchData = () => {
        if (!this.props.blog) {
            let location = this.props.location;
            if (location.pathname.includes('edit')) {
                const uri = (this.props.match.params as any).id;
                this.props.dispatch(MyBlogActions.GetBlog(uri, this.props.dispatch));
            }
        }
    };

    componentDidMount(): void {
        this.verifyEditOrAdd();
        this.fetchData();
    }

    verifyEditOrAdd = () => {
        let location = this.props.location;
        if (location.pathname.includes('edit')) {
            // const blogUri: string = (this.props.match.params as any).id;
            this.setState({edit: true});
        }
    };

    render() {
        const {edit} = this.state;
        const {blog} = this.props;
        if (edit && !blog) {
            return (
                <CircularLoader/>
            )
        }
        const data = edit ? JSON.parse(blog.body) : {};
        return (
            <div className="blog-edit-container">
                <FrugalEditor data={data}/>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState, props: BlogAddUpdateProps) => {
    let blog: Blog;
    let location = props.location;
    if (location.pathname.includes('edit')) {
        const uri: string = (props.match.params as any).id;
        blog = Object.values(state.blogState.blogs).find((b: Blog) => b.uri === uri) as Blog;
    }
    return {blog};
};

export default withRouter(connect(mapStateToProps)(BlogAddUpdate));
