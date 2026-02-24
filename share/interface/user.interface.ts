import { IBaseResponse } from "./api.interface";

export interface IUserJWT extends IBaseResponse {
    accessToken: string;
    user: IUser;
}

export interface IBaseUser {
    avatar: string;
    email: string,
    username: string,
}

export interface IUser extends IBaseUser {
    _id: string
}

export interface IBodyLoginRequest {
    email: string;
    password: string;
}

export interface IBodyRegisterRequest extends IBodyLoginRequest {
    username: string
}