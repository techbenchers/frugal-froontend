import React from 'react';
import { RouteComponentProps, withRouter } from "react-router";
import { connect, DispatchProp } from 'react-redux'
import { Blog, StoreState, User } from '../../interface';
import { CircularLoader } from "../CircularLoader";
import './BlogView.scss';
import { MyBlogActions } from "../../store/actions";
import { Fab } from '@material-ui/core';
import { Link } from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';



const Editor = React.lazy(() => import('../Editor'));

export interface BlogViewProps extends RouteComponentProps, Partial<DispatchProp> {
    blog?: Blog;
    isLoading?: boolean;
    user?: User;
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
        const { isLoading } = this.props;
        const blog: Blog = this.props.blog as Blog;
        if (isLoading || !blog) {
            return <CircularLoader />;
        }
        let body: any = JSON.parse(blog.body);
        return (
            <>
                <Editor readonly={true} data={body} />
                {
                    this.props.user.blogIds.includes(blog.id) &&
                    <Link to={this.props.location.pathname + '/edit'}>
                        <Fab className="edit-post">
                            <EditIcon />
                        </Fab>
                    </Link>
                }
            </>
        );
    }

}

const mapStateToProps = (state: StoreState, props: BlogViewProps) => {
    const { isLoading } = state.blogState;
    const user: User = Object.values<User>(state.userState.user)[0];
    let blogs: Blog[] = Object.values(state.blogState.blogs);
    let uri: string = (props.match.params as any).id;
    let blog: Blog = blogs.find((b: Blog) => b.uri === uri) as Blog;
    return { blog: blog, isLoading: isLoading, user };
};


export default withRouter(connect(mapStateToProps)(BlogView));
