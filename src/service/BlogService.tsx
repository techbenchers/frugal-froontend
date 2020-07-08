import {Blog} from "../interface";
import {HttpServiceUtil} from "./HttpServiceUtil";

export class BlogService {
    public static getUserBlogs(userId: string): Promise<Blog[]> {
        return HttpServiceUtil.getData<Blog[]>(`/blog/user/${userId}`);
    }

    public static addBlog(blog: Blog): Promise<Blog> {
        return HttpServiceUtil.postData<Blog>(`/blog/add`, blog);
    }

    public static updateBlog(blog: Blog): Promise<Blog> {
        return HttpServiceUtil.postData<Blog>(`/blog/update`, blog);
    }

    public static getAllBLog(): Promise<Blog[]> {
        // return HttpServiceUtil.getData<Blog[]>(`/blog`);
        return HttpServiceUtil.getData<Blog[]>(`/blog/all`);
    }

    public static getBlog(id: string): Promise<Blog> {
        // return generateBlog();
        return HttpServiceUtil.getData<Blog>(`/blog/${id}`)
    }

    public static deleteBlog(id: string): Promise<string> {
        return HttpServiceUtil.deleteData<string>(`/remove/${id}`);
    }
}
