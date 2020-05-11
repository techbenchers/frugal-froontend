export class User {
    public id: string;
    public name: string;
    public email: string;
    public admin: boolean;
    public blogIds: string [];

    constructor() {
        this.id = "";
        this.name = "";
        this.email = "";
        this.admin = false;
        this.blogIds = [];
    }
}