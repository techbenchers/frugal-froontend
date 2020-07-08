import { BlogActionsTypes } from "../actions";
import { Blog, BlogState, MyAction } from "../../interface";


const initState: BlogState = {
    blogs: {},
    isLoading: false,
};

export const BlogReducer = (state: BlogState = initState, action: MyAction<any>): BlogState => {
    switch (action.type) {
        case BlogActionsTypes.GetBlog:
        case BlogActionsTypes.LoadBlog:
        case BlogActionsTypes.DeleteBlog:
        case BlogActionsTypes.UpdateBlog:
        case BlogActionsTypes.LoadBlogsByUserId:
        case BlogActionsTypes.AddBlog:
            return {
                ...state,
                isLoading: true
            };
        case BlogActionsTypes.GetBlogSuccess:
        case BlogActionsTypes.AddBlogSuccess:
        case BlogActionsTypes.UpdateBlogSuccess:
        case BlogActionsTypes.LoadBlogsByUserIdSuccess:
            return {
                isLoading: false,
                blogs: {
                    ...state.blogs,
                    [action.payload.id]: action.payload
                }
            };
        case BlogActionsTypes.DeleteBlogSuccess:
            delete state.blogs[action.payload];
            return {
                isLoading: false,
                blogs: { ...state.blogs }
            };
        case BlogActionsTypes.LoadBlogSuccess:
            let tempState = state;
            action.payload.forEach((blog: Blog) => {
                tempState.blogs = {
                    ...tempState.blogs,
                    [blog.id as string]: blog
                };
            });
            return {
                isLoading: false,
                blogs: { ...tempState.blogs }
            };
        default:
            return state;
    }
};
