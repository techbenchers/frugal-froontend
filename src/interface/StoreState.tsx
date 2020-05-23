import {Blog} from "./Blog";
import {User} from "./User";

export interface BlogState {
    blogs: {
        [id: string]: Blog;
    };
    isLoading: boolean;
}

export interface UserState {
    user: { [id: string]: User };
    isLoading: boolean;
}

export interface StoreState {
    blogState: BlogState;
    userState: UserState;
}