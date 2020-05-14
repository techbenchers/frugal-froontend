import {Blog, MyAction} from "../../interface";

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

    public static GetBlog(payload: string): MyAction<string> {
        return {
            type: BlogActionsTypes.GetBlog,
            payload: payload
        };
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

    public static LoadBlogsByUserId(payload: string): MyAction<string> {
        return {
            type: BlogActionsTypes.LoadBlogsByUserId,
            payload: payload
        };
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

    public static AddBlog(payload: Blog): MyAction<Blog> {
        return {
            type: BlogActionsTypes.AddBlog,
            payload: payload
        };
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

    public static UpdateBlog(payload: Blog): MyAction<Blog> {
        return {
            type: BlogActionsTypes.UpdateBlog,
            payload: payload
        };
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

    public static LoadBlog(payload: string):  MyAction<string> {
        return {
            type: BlogActionsTypes.LoadBlog,
            payload: payload
        };
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

    public static DeleteBlog(payload: string): MyAction<string> {
        return {
            type: BlogActionsTypes.DeleteBlog,
            payload: payload
        };
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
