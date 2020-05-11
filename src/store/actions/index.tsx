export * from './BlogActions';
export * from './UserActions';

export interface Action {
    type: string;
    payload?: any;
}