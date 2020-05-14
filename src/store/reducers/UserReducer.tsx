import {UserActionsTypes} from "../actions";
import {MyAction, User} from "../../interface";


export interface UserState {
    [id: string]: User;
}

const initState: UserState = {};

export const UserReducer = (state: UserState = initState, action: MyAction<any>): UserState => {
    switch (action.type) {
        case UserActionsTypes.GetUserSuccess:
            console.log("user reduxer ", state, action);
            return {...state, [action.payload.id]: action.payload};
        default:
            return state;
    }
};