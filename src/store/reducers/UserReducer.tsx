import {Action, UserActionsTypes} from "../actions";
import {User} from "../../interface";


export interface UserState {
    [id: string]: User;
}

const initState: UserState = {};

export const UserReducer = (state: UserState = initState, action: Action): UserState => {
    switch (action.type) {
        case UserActionsTypes.GetUserSuccess:
            return {...state, [action.payload.id]: action.payload};
        default:
            return state;
    }
};