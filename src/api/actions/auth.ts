import { TUser } from "../types/user.type";
import {
  IAuthService,
  IBaseUser,
  ICreateUser,
} from "./interface/auth.service.interface";
import { customAxios } from "../axios";

export class Auth implements IAuthService {
  async signIn(data: IBaseUser): Promise<{ id: string }> {
    return await customAxios.post("auth/sign-in", data);
  }
  async signUp(data: ICreateUser): Promise<{ id: string }> {
    return await customAxios.post("auth/sign-up", data);
  }
  async me(id: string): Promise<TUser> {
    return await customAxios.get(`user/${id}`);
  }
}
