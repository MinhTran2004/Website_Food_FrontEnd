import { IBodyLoginRequest, IBodyRegisterRequest, IUser } from "@/share/interface/user.interface";
import HttpClient from "./index.service";
import { URLS } from "./url.service";
import { IResponse } from "@/share/interface/api.interface";

class UserService {
    async loginService(body: IBodyLoginRequest): Promise<IResponse<IUser>> {
        try {
            const response = await HttpClient.post<IBodyLoginRequest, IResponse<IUser>>(URLS.LOGIN, body);
            return response;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

    async registerService(body: IBodyRegisterRequest): Promise<IResponse<IUser>> {
        try {
            const response = await HttpClient.post<IBodyRegisterRequest, IResponse<IUser>>(URLS.REGISTER, body);
            return response;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}

export const userService = new UserService();