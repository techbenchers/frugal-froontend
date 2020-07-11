import React from 'react';
import {connect, DispatchProp} from 'react-redux';
import {Blog, StoreState, User} from '../../interface';
import {Box} from '@material-ui/core';
import {CircularLoader} from "../../shared/CircularLoader";
import {MyBlogActions} from "../../store/actions";
import './MyBlogs.scss';
import BlogList from "../../shared/BlogList";


export interface MyBlogsProps extends DispatchProp {
    blogs?: Blog[];
    isLoading?: boolean;
    user?: User;
}

export interface MyBlogsState {

}

class MyBlogs extends React.Component<MyBlogsProps, MyBlogsState> {

    shouldComponentUpdate(nextProps: MyBlogsProps) {
        return JSON.stringify(nextProps.blogs) !== JSON.stringify(this.props.blogs);
    }

    fetchData = () => {
        this.props.dispatch(MyBlogActions.LoadBlog("", this.props.dispatch));
    };

    componentDidMount() {
        this.fetchData();
    }

    render() {
        const {isLoading} = this.props;
        const {blogs} = this.props;
        if (isLoading) {
            return <CircularLoader/>
        }
        if (!blogs.length) {
            return (
                <Box display="flex"
                     justifyContent="center"
                     alignItems="center"
                     height={1}>
                    No Blogs
                </Box>
            );
        }
        return (
            <>
                <BlogList blogs={blogs}/>
            </>
        );
    }
}

const mapStateToProps = (state: StoreState) => {
    const blogs: Blog[] = Object.values<Blog>(state.blogState.blogs);
    const user: User = Object.values<User>(state.userState.user)[0];
    let filteredBlogs: Blog[] = blogs.filter((blog: Blog) => user.blogIds.includes(blog.id));
    return {blogs: filteredBlogs, user};
};


export default connect(mapStateToProps)(MyBlogs);
