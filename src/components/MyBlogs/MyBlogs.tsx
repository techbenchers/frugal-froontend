import React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { Blog, StoreState, User } from '../../interface';
import { Box } from '@material-ui/core';
import { CircularLoader } from "../CircularLoader";
import { DateTime } from "luxon";
import { BlogCard } from "../BlogCard";
import { DeltaToHTML } from '../Editor';
import { MyBlogActions } from "../../store/actions";
import './MyBlogs.scss';


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

    getShortBlog = (deltaString: string): string => {
        return DeltaToHTML.deltoToHTML(JSON.parse(deltaString)).substr(0, 200) + '...';
    };

    getCreatedDate(isoDate: string): string {
        return DateTime.fromISO(isoDate).toFormat("LLL dd, yyyy");
    }

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
                            author={this.props.user.name || ''}
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
    const blogs: Blog[] = Object.values<Blog>(state.blogState.blogs);
    const user: User = Object.values<User>(state.userState.user)[0];
    let filteredBlogs: Blog[] = blogs.filter((blog: Blog) => user.blogIds.includes(blog.id));
    return { blogs: filteredBlogs, user };
}


export default connect(mapStateToProps)(MyBlogs);