import {
  IBodyLoginRequest,
  IBodyRegisterRequest,
  IUser,
  IUserJWT,
} from "@/share/interface/user.interface";
import HttpClient from "./index.service";
import { URLS } from "./url.service";
import { IResponse } from "@/share/interface/api.interface";

class UserService {
  async loginService(body: IBodyLoginRequest): Promise<IResponse<IUserJWT>> {
    try {
      const response = await HttpClient.post<
        IBodyLoginRequest,
        IResponse<IUserJWT>
      >(URLS.LOGIN, body);
      return response;
    } catch (err) {
      throw err;
    }
  }

  async registerService(body: IBodyRegisterRequest): Promise<IResponse<IUserJWT>> {
    try {
      const response = await HttpClient.post<
        IBodyRegisterRequest,
        IResponse<IUserJWT>
      >(URLS.REGISTER, body);
      return response;
    } catch (err) {
      throw err;
    }
  }

  async loginGoogleService(body: {
    idToken: string;
  }): Promise<IResponse<IUserJWT>> {
    try {
      const response = await HttpClient.post<
        { idToken: string },
        IResponse<IUserJWT>
      >(URLS.LOGIN_GOOGLE, body);
      return response;
    } catch (err) {
      throw err;
    }
  }

  async getUser(): Promise<IResponse<IUser>> {
    try {
      const response = await HttpClient.get<IResponse<IUser>>(URLS.USER);
      return response;
    } catch (err) {
      throw err;
    }
  }
}

export const userService = new UserService();
