import {UserActionsTypes} from "../actions";
import {MyAction, UserState} from "../../interface";


const initState: UserState = {
    user: {},
    isLoading: false,
};

export const UserReducer = (state: UserState = initState, action: MyAction<any>): UserState => {
    switch (action.type) {
        case UserActionsTypes.GetUser:
            return {
                ...state,
                isLoading: true
            };
        case UserActionsTypes.GetUserSuccess:
            return {
                isLoading: false,
                user: {[action.payload.id]: action.payload}
            };
        default:
            return state;
    }
};