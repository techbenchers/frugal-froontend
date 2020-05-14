export interface MyAction<T> {
    type: string;
    payload: T;
}