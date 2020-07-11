import React from 'react';
import './BlogList.scss';
import {Blog} from "../../interface";
import {BlogCard} from "../BlogCard";
import {DateTime} from "luxon";
import {DeltaToHTML} from "../Editor";

export interface BlogListProps {
    blogs: Blog[];
}

export interface BlogListState {

}

class BlogList extends React.PureComponent<BlogListProps, BlogListState> {

    getCreatedDate(isoDate: string): string {
        return DateTime.fromISO(isoDate).toFormat("LLL dd, yyyy");
    }

    getShortBlog = (deltaString: string): string => {
        return DeltaToHTML.deltoToHTML(JSON.parse(deltaString)).substr(0, 200) + '...';
    };

    render() {
        const {blogs} = this.props;
        return (
            blogs.map((blog: Blog) => (
                <BlogCard
                    key={blog.id || ''}
                    title={blog.title}
                    uri={blog.uri as string}
                    alt={blog.title as string}
                    author={"Suyash Deshpande"}
                    body={this.getShortBlog(blog.body)}
                    img={blog.titleImage}
                    date={this.getCreatedDate(blog.createdAt as string)}/>
            ))
        )
    }

}

export default BlogList;
