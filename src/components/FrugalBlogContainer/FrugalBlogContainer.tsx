import React from 'react';
import './FrugalBlogContainer.css';
import {FrugalPostCard, FrugalPostCardProps} from "../FrugalPostCard/FrugalPostCard";
import paella from "../../static/images/paella.jpeg";
import {connect} from 'react-redux'
import {MyBlogActions} from "../../store/actions";
import {Blog, User} from "../../interface";
import {HttpServiceUtil} from "../../service";


const frugal: FrugalPostCardProps = {
    uri: "Shrimp-and-Chorizo-Paella-123",
    img: paella,
    alt: "paella",
    title: "Shrimp and Chorizo Paella",
    date: "September 14, 2016",
    body: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.",
    author: "Aniket Singh"
};
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const blog: Blog = {
    id: "qwe123",
    titleImage: "",
    title: "Avengers Assemble",
    publishedAt: "",
    updatedAt: "",
    isPublished: false,
    isAnonymous: false,
    createdAt: "",
    userId: "user123",
    body: "loremmdasdashdahsdjkaksdhkasbvdiuabsdjhas da sd a sd a sdkasdasdkasd",
    uri: "Avengers-Assemble-qwe123"
};

export interface FrugalBlogContainerProps {
    dispatch: (e: any) => void;
    getState?: () => any;
}

export interface FrugalBlogContainerState {

}

class FrugalBlogContainer extends React.Component<FrugalBlogContainerProps, FrugalBlogContainerState> {
    componentDidMount() {
        // Todo: remove below lines
        this.props.dispatch(MyBlogActions.GetBlogSuccess(blog));
        console.log("Frugal container props", this.props);

        HttpServiceUtil.getData<User>("/user/info").then((r: User) => {
            console.log("user info ", r);
        }).catch((e: any) => {
            console.log("error while fetching user", e.toString());
        })
    }

    render() {
        return (
            <>
                {
                    list.map((i: number) => <FrugalPostCard key={i} {...frugal}/>)
                }
            </>
        );
    }
}

const mapStateToProps = (state: any) => {
    console.log("map state props state", state);
    return {};
};

export default connect(mapStateToProps)(FrugalBlogContainer);