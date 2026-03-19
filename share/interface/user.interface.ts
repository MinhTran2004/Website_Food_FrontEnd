import { PROVIDER } from "../contanst/user.constant";
import { IBaseResponse } from "./api.interface";

export interface IUserJWT extends IBaseResponse {
  accessToken: string;
  user: IUser;
}

export interface IBaseUser {
  avatar: string;
  email: string;
  username: string;
  provider: string;
}

export interface IUser extends IBaseUser {
  id: string;
}

export interface IBodyLoginRequest {
  email: string;
  password: string;
}

export interface IBodyRegisterRequest extends IBodyLoginRequest {
  username: string;
  provider: PROVIDER;
  isCheckBox: boolean;
}
