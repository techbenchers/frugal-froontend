import {MyAction, User} from "../../interface";

export enum UserActionsTypes {
    // Get user
    GetUser = '[User] Get User',
    GetUserSuccess = '[User] Get User Success',
    GetUserFail = '[User] Get User Fail',
}

export class MyUserActions {

    public static GetUser(payload: string): MyAction<string> {
        return {
            type: UserActionsTypes.GetUser,
            payload: payload,
        };
    }

    public static GetUserSuccess(payload: User): MyAction<User> {
        return {
            type: UserActionsTypes.GetUserSuccess,
            payload: payload
        };
    }

    public static GetUserFail(payload: string): MyAction<string> {
        return {
            type: UserActionsTypes.GetUserFail,
            payload: payload
        };
    }

}
