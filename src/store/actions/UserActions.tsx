import {MyAction, User} from "../../interface";
import {UserService} from "../../service";

export enum UserActionsTypes {
    // Get user
    GetUser = '[User] Get User',
    GetUserSuccess = '[User] Get User Success',
    GetUserFail = '[User] Get User Fail',
}

export class MyUserActions {

    public static GetUser(payload: string, dispatch: Function): MyAction<string> {
        const action = {
            type: UserActionsTypes.GetUser,
            payload: payload,
        };
        UserService.getUser()
            .then((user: User) => {
                dispatch(MyUserActions.GetUserSuccess(user));
            })
            .catch((err) => {
                dispatch(MyUserActions.GetUserFail(err.toString()));
            });
        return action;
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
