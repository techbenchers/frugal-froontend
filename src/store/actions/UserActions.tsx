import {User} from "../../interface";

export enum UserActionsTypes {
    // Get user
    GetUser = '[User] Get User',
    GetUserSuccess = '[User] Get User Success',
    GetUserFail = '[User] Get User Fail',
}

export class MyUserActions {

    public static GetBlog() {
        return {
            type: UserActionsTypes.GetUser,
        };
    }

    public static GetBlogSuccess(payload: User) {
        return {
            type: UserActionsTypes.GetUserSuccess,
            payload: payload
        };
    }

    public static GetBlogFail(payload: string) {
        return {
            type: UserActionsTypes.GetUserFail,
            payload: payload
        };
    }

}
