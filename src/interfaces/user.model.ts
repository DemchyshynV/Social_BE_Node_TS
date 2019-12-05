export interface IUser {
    _id?: string;
    email: string;
    password: string;
    status: string | number;
    created_at: string;
    updated_at?:string;
    profile_id:string;
}
