export class Blog {
    public id: string;
    public title: string;
    public uri: string;
    public body: string;
    public userId: string;
    public createdAt: string;
    public isAnonymous: boolean;
    public isPublished: boolean;
    public updatedAt: string;
    public publishedAt: string;
    public titleImage: string;

    constructor(title: string, body: string, userId: string) {
        this.id = null;
        this.title = title;
        this.uri = null;
        this.body = body;
        this.userId = userId;
        this.createdAt = null;
        this.isAnonymous = false;
        this.isPublished = false;
        this.updatedAt = null;
        this.publishedAt = null;
        this.titleImage = null;
    }
}