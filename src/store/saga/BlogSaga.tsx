import {takeLatest, all, call, put} from 'redux-saga/effects';
import {BlogActionsTypes, MyBlogActions} from "../actions";
import {BlogService} from "../../service";
import {Blog, MyAction} from "../../interface";

function* getBlog(action: MyAction<string>): Generator {
    try {
        const data: any = yield call(BlogService.getBlog, action.payload);
        yield put(MyBlogActions.GetBlogSuccess(data as Blog));

    } catch (e) {
        yield put(MyBlogActions.GetBlogFail(e.toString()));
    }
}

function* addBlog(action: MyAction<Blog>): Generator {
    try {
        const data: any = yield call(BlogService.addBlog, action.payload);
        yield put(MyBlogActions.AddBlogSuccess(data as Blog));
    } catch (e) {
        yield put(MyBlogActions.AddBlogFail(e.toString()));
    }
}

function* deleteBlog(action: MyAction<string>): Generator {
    try {
        yield call(BlogService.deleteBlog, action.payload);
        yield put(MyBlogActions.DeleteBlogSuccess(action.payload as string));
    } catch (e) {
        yield put(MyBlogActions.DeleteBlogFail(e.toString()));
    }
}

function* loadBlogsByUserId(action: MyAction<string>): Generator {
    try {
        const data: any = yield call(BlogService.getUserBlogs, action.payload);
        yield put(MyBlogActions.LoadBlogsByUserIdSuccess(data as Blog[]));
    } catch (e) {
        yield put(MyBlogActions.LoadBlogsByUserIdFail(e.toString()));
    }
}

function* updateBlog(action: MyAction<Blog>): Generator {
    try {
        const data: any = yield call(BlogService.updateBlog, action.payload);
        yield put(MyBlogActions.UpdateBlogSuccess(data as Blog));
    } catch (e) {
        yield put(MyBlogActions.UpdateBlogFail(e.toString()));
    }
}

function* loadBlog(action: MyAction<string>): Generator {
    try {
        const data: any = yield call(BlogService.getAllBLog);
        yield put(MyBlogActions.LoadBlogSuccess(data as Blog[]));
    } catch (e) {
        yield put(MyBlogActions.LoadBlogFail(e.toString()));
    }
}

function* actionWatcher(): Generator {
    yield takeLatest(BlogActionsTypes.GetBlog, getBlog);
    yield takeLatest(BlogActionsTypes.AddBlog, addBlog);
    yield takeLatest(BlogActionsTypes.DeleteBlog, deleteBlog);
    yield takeLatest(BlogActionsTypes.LoadBlogsByUserId, loadBlogsByUserId);
    yield takeLatest(BlogActionsTypes.UpdateBlog, updateBlog);
    yield takeLatest(BlogActionsTypes.LoadBlog, loadBlog);
}

export function* blogSaga(): Generator {
    yield all([
        actionWatcher()
    ])
}