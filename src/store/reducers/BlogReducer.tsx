import { BlogActionsTypes} from "../actions";
import {Blog, MyAction} from "../../interface";


export interface BlogState {
    [id: string]: Blog;
}


const initState: BlogState = {};

export const BlogReducer = (state: BlogState = initState, action: MyAction<any>): BlogState => {
    switch (action.type) {
        case BlogActionsTypes.GetBlogSuccess:
        case BlogActionsTypes.AddBlogSuccess:
        case BlogActionsTypes.UpdateBlogSuccess:
        case BlogActionsTypes.LoadBlogsByUserIdSuccess:
            return {
                ...state, [action.payload.id]: action.payload
            };
        case BlogActionsTypes.DeleteBlogSuccess:
            delete state[action.payload];
            return {...state};
        case BlogActionsTypes.LoadBlogSuccess:
            let tempState = state;
            action.payload.forEach((blog: Blog) => {
                tempState = {...tempState, [blog.id as string]: blog};
            });
            return {
                ...tempState
            };
        default:
            return state;
    }
};