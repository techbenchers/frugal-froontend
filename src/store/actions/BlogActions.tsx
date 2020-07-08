import {Blog, MyAction} from "../../interface";
import {BlogService} from "../../service";

export enum BlogActionsTypes {
    // Get single blog by id
    GetBlog = '[Blog] Get Blog',
    GetBlogSuccess = '[Blog] Get Blog Success',
    GetBlogFail = '[Blog] Get Blog Fail',

    // load blogs by user id
    LoadBlogsByUserId = '[Blog] Load Blogs By User Id',
    LoadBlogsByUserIdSuccess = '[Blog] Load Blogs By User Id Success',
    LoadBlogsByUserIdFail = '[Blog] Load Blogs By User Id Fail',

    // Add blog
    AddBlog = '[Blog] Add Blog',
    AddBlogSuccess = '[Blog] Add Blog Success',
    AddBlogFail = '[Blog] Add Blog Fail',

    // Update blog
    UpdateBlog = '[Blog] Update Blog',
    UpdateBlogSuccess = '[Blog] Update Blog Success',
    UpdateBlogFail = '[Blog] Update Blog Fail',

    // Load all blog
    LoadBlog = '[Blog] Load Blog',
    LoadBlogSuccess = '[Blog] Load Blog Success',
    LoadBlogFail = '[Blog] Load Blog Fail',

    // Delete blog
    DeleteBlog = '[Blog] Delete Blog',
    DeleteBlogSuccess = '[Blog] Delete Blog Success',
    DeleteBlogFail = '[Blog] Delete Blog Fail',
}

export class MyBlogActions {

    public static GetBlog(payload: string, dispatch: Function): MyAction<string> {
        const action = {
            type: BlogActionsTypes.GetBlog,
            payload: payload
        };
        BlogService.getBlog(payload)
            .then((blog: any) => {
                // Todo: change any to Blog, and blog[0] to blog
                dispatch(MyBlogActions.GetBlogSuccess(blog[0]));
            })
            .catch((err) => {
                dispatch(MyBlogActions.GetBlogFail(err.toString()));
            });
        return action;
    }

    public static GetBlogSuccess(payload: Blog): MyAction<Blog> {
        return {
            type: BlogActionsTypes.GetBlogSuccess,
            payload: payload
        };
    }

    public static GetBlogFail(payload: string): MyAction<string> {
        return {
            type: BlogActionsTypes.GetBlogFail,
            payload: payload
        };
    }

    public static LoadBlogsByUserId(payload: string, dispatch: Function): MyAction<string> {
        const action = {
            type: BlogActionsTypes.LoadBlogsByUserId,
            payload: payload
        };

        BlogService.getUserBlogs(payload)
            .then((blogs: Blog[]) => {
                dispatch(MyBlogActions.LoadBlogsByUserIdSuccess(blogs));
            })
            .catch((err) => {
                dispatch(MyBlogActions.LoadBlogsByUserIdFail(err.toString()))
            });

        return action;
    }

    public static LoadBlogsByUserIdSuccess(payload: Blog[]): MyAction<Blog[]> {
        return {
            type: BlogActionsTypes.LoadBlogsByUserIdSuccess,
            payload: payload
        };
    }

    public static LoadBlogsByUserIdFail(payload: string): MyAction<string> {
        return {
            type: BlogActionsTypes.LoadBlogsByUserIdFail,
            payload: payload
        };
    }

    public static AddBlog(payload: Blog, dispatch: Function): MyAction<Blog> {
        const action = {
            type: BlogActionsTypes.AddBlog,
            payload: payload
        };
        BlogService.addBlog(payload)
            .then((blog: Blog) => {
                dispatch(MyBlogActions.AddBlogSuccess(blog));
            })
            .catch((err) => {
                dispatch(MyBlogActions.AddBlogFail(err.toString()));
            });
        return action;
    }

    public static AddBlogSuccess(payload: Blog): MyAction<Blog> {
        return {
            type: BlogActionsTypes.AddBlogSuccess,
            payload: payload
        };
    }

    public static AddBlogFail(payload: string): MyAction<string> {
        return {
            type: BlogActionsTypes.AddBlogFail,
            payload: payload
        };
    }

    public static UpdateBlog(payload: Blog, dispatch: Function): MyAction<Blog> {
        const action = {
            type: BlogActionsTypes.UpdateBlog,
            payload: payload
        };
        BlogService.updateBlog(payload)
            .then((blog: Blog) => {
                dispatch(MyBlogActions.UpdateBlogSuccess(blog));
            })
            .catch((err) => {
                dispatch(MyBlogActions.UpdateBlogFail(err.toString()));
            });
        return action;
    }

    public static UpdateBlogSuccess(payload: Blog): MyAction<Blog> {
        return {
            type: BlogActionsTypes.UpdateBlogSuccess,
            payload: payload
        };
    }

    public static UpdateBlogFail(payload: string): MyAction<string> {
        return {
            type: BlogActionsTypes.UpdateBlogFail,
            payload: payload
        };
    }

    public static LoadBlog(payload: string, dispatch: Function): MyAction<string> {
        const action = {
            type: BlogActionsTypes.LoadBlog,
            payload: payload
        };
        BlogService.getAllBLog()
            .then(((blogs: Blog[]) => {
                dispatch(MyBlogActions.LoadBlogSuccess(blogs));
            }))
            .catch(err => {
                dispatch(MyBlogActions.LoadBlogFail(err.toString()));
            });

        return action;
    }

    public static LoadBlogSuccess(payload: Blog[]): MyAction<Blog[]> {
        return {
            type: BlogActionsTypes.LoadBlogSuccess,
            payload: payload
        };
    }

    public static LoadBlogFail(payload: string): MyAction<string> {
        return {
            type: BlogActionsTypes.LoadBlogFail,
            payload: payload
        };
    }

    public static DeleteBlog(payload: string, dispatch: Function): MyAction<string> {
        const action = {
            type: BlogActionsTypes.DeleteBlog,
            payload: payload
        };
        BlogService.deleteBlog(payload)
            .then((id: string) => {
                dispatch(MyBlogActions.DeleteBlogSuccess(id));
            })
            .catch((err) => {
                dispatch(MyBlogActions.DeleteBlogFail(err.toString()));
            });
        return action;
    }

    public static DeleteBlogSuccess(payload: string): MyAction<string> {
        return {
            type: BlogActionsTypes.DeleteBlogSuccess,
            payload: payload
        };
    }

    public static DeleteBlogFail(payload: string): MyAction<string> {
        return {
            type: BlogActionsTypes.DeleteBlogFail,
            payload: payload
        };
    }
}
