import {takeLatest, all, call, put} from 'redux-saga/effects';
import {UserService} from "../../service";
import {MyAction, User} from "../../interface";
import {MyUserActions, UserActionsTypes} from "../actions";

function* getUser(action: MyAction<string>): Generator {
    try {
        const data: any = yield call(UserService.getUser);
        yield put(MyUserActions.GetUserSuccess(data as User));

    } catch (e) {
        yield put(MyUserActions.GetUserFail(e.toString()));
    }
}

function* actionWatcher(): Generator {
    yield takeLatest(UserActionsTypes.GetUser, getUser);
}

export function* userSaga(): Generator {
    yield all([
        actionWatcher()
    ])
}