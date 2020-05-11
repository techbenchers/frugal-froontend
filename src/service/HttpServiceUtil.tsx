import Cookies from 'js-cookie';
import axios, {AxiosRequestConfig} from 'axios';

const prefixAPI: string = "http://localhost:8080";

const config: AxiosRequestConfig = {
    headers: {
        "Content-Type": "application/json",
        "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN") as string,
    },
    timeout: 4000
};

export class HttpServiceUtil {

    public static async getData<T>(endPoint: string): Promise<T> {
        try {
            console.log("axios config ", config);
            let res = await axios.get<T>(prefixAPI + endPoint, config);
            return res.data as T;
        } catch (e) {
            console.error("Error while get data " + e.toString());
            throw e;
        }
    }

    public static async postData<T>(endPoint: string, body: T): Promise<T> {
        try {
            let res = await axios.post<T>(prefixAPI + endPoint, {...config, data: body});
            return res.data as T;
        } catch (e) {
            console.error("Error while post data " + e.toString());
            throw e;
        }
    }

    public static async deleteData<T>(endPoint: string): Promise<T> {
        try {
            let res = await axios.delete<T>(endPoint);
            return res.data as T;
        } catch (e) {
            console.error("Error while delte data " + e.toString());
            throw  e;
        }
    }

}