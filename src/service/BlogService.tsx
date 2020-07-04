import {Blog} from "../interface";
import {HttpServiceUtil} from "./HttpServiceUtil";
import * as faker from 'faker';

async function generateBlog(): Promise<Blog> {
    const title: string = faker.random.words();
    const id: string = faker.random.uuid();
    const uri: string = title + '-' + id;
    return {
        body: JSON.stringify({
            "ops": [{
                "attributes": {"align": "justify"},
                "insert": faker.lorem.paragraph(),
            }, {
                "attributes": {"align": "justify"},
                "insert": "\n"
            }, {"insert": faker.lorem.paragraph()}, {
                "attributes": {"align": "justify"},
                "insert": "\n"
            }, {"insert": faker.lorem.paragraph()}, {
                "attributes": {"align": "justify"},
                "insert": "\n"
            }, {"insert": faker.lorem.paragraph()}, {
                "attributes": {"align": "justify"},
                "insert": "\n"
            }, {"insert": faker.lorem.paragraph()}, {
                "attributes": {"align": "justify"},
                "insert": "\n"
            }, {"insert": faker.lorem.paragraph()}, {
                "attributes": {"align": "justify"},
                "insert": "\n"
            }, {"insert": faker.lorem.paragraph()}, {
                "attributes": {"align": "justify"},
                "insert": "\n"
            }, {"insert": faker.lorem.paragraph()}, {
                "attributes": {"align": "justify"},
                "insert": "\n"
            }, {"insert": faker.lorem.paragraph()}, {
                "attributes": {"align": "justify"},
                "insert": "\n"
            }, {"insert": faker.lorem.paragraph()}, {
                "attributes": {"align": "justify"},
                "insert": "\n"
            }, {"insert": faker.lorem.paragraph()}, {
                "attributes": {"align": "justify"},
                "insert": "\n"
            }, {"insert": faker.lorem.paragraph()}, {
                "attributes": {"align": "justify"},
                "insert": "\n"
            }, {"insert": "\n"}]
        }),
        createdAt: faker.date.past().toISOString(),
        isAnonymous: false,
        isPublished: false,
        publishedAt: faker.date.past().toISOString(),
        title: title,
        titleImage: faker.image.image(),
        updatedAt: faker.date.past().toISOString(),
        uri: uri,
        userId: faker.random.uuid(),
        id: id
    }
}

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
        return HttpServiceUtil.getData<Blog[]>(`/blog`);
        // return HttpServiceUtil.getData<Blog[]>(`/blog/all`);
    }

    public static getBlog(id: string): Promise<Blog> {
        return generateBlog();
        // return HttpServiceUtil.getData<Blog>(`/blog/${id}`)
    }

    public static deleteBlog(id: string): Promise<string> {
        return HttpServiceUtil.deleteData<string>(`/remove/${id}`);
    }
}
