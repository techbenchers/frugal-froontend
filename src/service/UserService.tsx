import {User} from "../interface";
import {HttpServiceUtil} from "./HttpServiceUtil";

export class UserService {
    public static getUser(): Promise<User> {
        return HttpServiceUtil.getData<User>(`/user/123093873448374`);
        // return HttpServiceUtil.getData<User>(`/user/info`);
    }
}