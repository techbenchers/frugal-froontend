import React from 'react';
import {connect, DispatchProp} from 'react-redux'
import {MyBlogActions} from "../../store/actions";
import {Blog, StoreState} from '../../interface';
import {CircularLoader} from "../../shared/CircularLoader";
import {Box} from '@material-ui/core';
import BlogList from "../../shared/BlogList";
import './BlogListContainer.scss';

export interface BlogListContainerProps extends DispatchProp {
    blogs: Blog[];
    isLoading: boolean;
}

export interface BlogListContainerState {

}

class BlogListContainer extends React.Component<BlogListContainerProps, BlogListContainerState> {

    shouldComponentUpdate(nextProps: BlogListContainerProps) {
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
    let blogs: Blog[] = Object.values<Blog>(state.blogState.blogs);
    let isLoading: boolean = state.blogState.isLoading;
    return {blogs: blogs, isLoading: isLoading};
};

export default connect(mapStateToProps)(BlogListContainer);
