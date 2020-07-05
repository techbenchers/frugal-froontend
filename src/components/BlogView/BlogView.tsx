import React from 'react';
import {RouteComponentProps, withRouter} from "react-router";
import {connect, DispatchProp} from 'react-redux'
import {Blog, StoreState} from '../../interface';
import {CircularLoader} from "../CircularLoader";
import './BlogView.scss';
import {MyBlogActions} from "../../store/actions";

const Editor = React.lazy(() => import('../Editor'));

export interface BlogViewProps extends RouteComponentProps, Partial<DispatchProp> {
    blog?: Blog;
    isLoading?: boolean;
}

export interface BlogViewState {

}

class BlogView extends React.PureComponent<BlogViewProps, BlogViewState> {

    fetchData = () => {
        if (!this.props.blog) {
            this.props.dispatch(MyBlogActions.LoadBlog('', this.props.dispatch));
        }
    };

    componentDidMount() {
        window.scrollTo(0, 0);
        this.fetchData();
    }

    render() {
        const {isLoading} = this.props;
        const blog: Blog = this.props.blog as Blog;
        if (isLoading || !blog) {
            return <CircularLoader/>;
        }
        let body: any = JSON.parse(blog.body);
        return (
            <>
                <Editor readonly={true} data={body}/>
                <button onClick={() => {
                    this.props.history.push(this.props.location.pathname + '/edit');
                }}>Edit
                </button>
            </>
        );
    }

}

const mapStateToProps = (state: StoreState, props: BlogViewProps) => {
    const {isLoading} = state.blogState;
    let blogs: Blog[] = Object.values(state.blogState.blogs);
    let uri: string = (props.match.params as any).id;
    let blog: Blog = blogs.find((b: Blog) => b.uri === uri) as Blog;
    return {blog: blog, isLoading: isLoading};
};


export default withRouter(connect(mapStateToProps)(BlogView));
