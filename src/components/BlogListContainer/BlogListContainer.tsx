import React from 'react';
import { BlogCard } from "../BlogCard";
import { connect, DispatchProp } from 'react-redux'
import { MyBlogActions } from "../../store/actions";
import { Blog, StoreState } from '../../interface';
import { DateTime } from "luxon";
import { CircularLoader } from "../CircularLoader";
import { DeltaToHTML } from '../Editor';
import './BlogListContainer.scss';
import { Box } from '@material-ui/core';

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

    getCreatedDate(isoDate: string): string {
        return DateTime.fromISO(isoDate).toFormat("LLL dd, yyyy");
    }

    getShortBlog = (deltaString: string): string => {
        return DeltaToHTML.deltoToHTML(JSON.parse(deltaString)).substr(0, 200) + '...';
    };

    render() {
        const { isLoading } = this.props;
        const { blogs } = this.props;
        if (isLoading) {
            return <CircularLoader />
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
                {
                    blogs.map((blog: Blog) => (
                        <BlogCard
                            key={blog.id || ''}
                            title={blog.title}
                            uri={blog.uri as string}
                            alt={blog.title as string}
                            author={"Suyash Deshpande"}
                            body={this.getShortBlog(blog.body)}
                            img={blog.titleImage}
                            date={this.getCreatedDate(blog.createdAt as string)} />
                    ))
                }
            </>
        );
    }
}

const mapStateToProps = (state: StoreState) => {
    let blogs: Blog[] = Object.values<Blog>(state.blogState.blogs);
    let isLoading: boolean = state.blogState.isLoading;
    return { blogs: blogs, isLoading: isLoading };
};

export default connect(mapStateToProps)(BlogListContainer);
