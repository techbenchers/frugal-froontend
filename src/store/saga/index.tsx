import {all, fork} from 'redux-saga/effects';
import {blogSaga} from "./BlogSaga";
import {userSaga} from "./UserSaga";

export * from './BlogSaga';
export * from './UserSaga';

export function* rootSaga() {
    yield all([fork(blogSaga), fork(userSaga)])
}