export interface IProfile {
    _id?: string;
    name:string;
    surname?:string;
    age:number;
    avatar?:string;
    admin: boolean;
    created_at: string;
    updated_at?:string;
}
