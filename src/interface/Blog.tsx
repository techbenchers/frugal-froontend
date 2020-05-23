export class Blog {
    public id: string | null;
    public title: string;
    public uri: string | null;
    public body: string;
    public userId: string | null;
    public createdAt: string | null;
    public isAnonymous: boolean;
    public isPublished: boolean;
    public updatedAt: string | null;
    public publishedAt: string | null;
    public titleImage: string | null;

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