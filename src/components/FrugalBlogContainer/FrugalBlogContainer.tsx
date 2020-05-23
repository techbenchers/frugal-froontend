import React from 'react';
import './FrugalBlogContainer.css';
import {FrugalPostCard} from "../FrugalPostCard/FrugalPostCard";
// import paella from "../../static/images/paella.jpeg";
import {connect} from 'react-redux'
import {MyBlogActions, MyUserActions} from "../../store/actions";
import {Blog, User} from '../../interface';
import {DateTime} from "luxon";


// const frugal: FrugalPostCardProps = {
//     uri: "Shrimp-and-Chorizo-Paella-123",
//     img: paella,
//     alt: "paella",
//     title: "Shrimp and Chorizo Paella",
//     date: "September 14, 2016",
//     body: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.",
//     author: "Aniket Singh"
// };
// const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const blog: Blog = {
//     id: "qwe123",
//     titleImage: "",
//     title: "Avengers Assemble",
//     publishedAt: "",
//     updatedAt: "",
//     isPublished: false,
//     isAnonymous: false,
//     createdAt: "",
//     userId: "user123",
//     body: "loremmdasdashdahsdjkaksdhkasbvdiuabsdjhas da sd a sd a sdkasdasdkasd",
//     uri: "Avengers-Assemble-qwe123"
// };

export interface FrugalBlogContainerProps {
    dispatch: (e: any) => void;
    blogs: Blog[];
    user: User;
}

export interface FrugalBlogContainerState {

}

class FrugalBlogContainer extends React.Component<FrugalBlogContainerProps, FrugalBlogContainerState> {
    componentDidMount() {
        // Todo: remove below lines
        this.props.dispatch(MyBlogActions.LoadBlog(""));
        this.props.dispatch(MyUserActions.GetUser(""));

    }

    getCreatedDate(isoDate: string): string {
        return DateTime.fromISO(isoDate).toFormat("LLL dd, yyyy");
    }

    render() {
        return (
            <>
                {
                    this.props.blogs?.map((blog: Blog) => (
                        <FrugalPostCard
                            key={blog.id || ''}
                            title={blog.title}
                            uri={blog.uri as string}
                            alt={blog.title as string}
                            author={"Suyash Deshpande"}
                            body={blog.body.substr(0, 200) + '...'}
                            img={blog.titleImage}
                            date={this.getCreatedDate(blog.createdAt as string)}/>
                    ))
                }
            </>
        );
    }
}

const mapStateToProps = (state: any) => {
    let blogs: Blog[] = Object.values<Blog>(state.blogs);
    let user: User = Object.values<User>(state.users)[0];
    return {blogs: blogs, user: user};
};

export default connect(mapStateToProps)(FrugalBlogContainer);