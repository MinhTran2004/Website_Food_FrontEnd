import { IBaseResponse } from "./api.interface";

export interface IUser extends IBaseResponse {
    accessToken: string;
    user: IUser;
}

export interface IBaseUser {
    avatar: string;
    email: string,
    username: string,
}

export interface IUser extends IBaseUser {
    id: string
}

export interface IBodyLoginRequest {
    email: string;
    password: string;
}

export interface IBodyRegisterRequest extends IBodyLoginRequest {
    username: string
}