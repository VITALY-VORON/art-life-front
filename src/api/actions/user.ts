import { customAxios } from "../axios";

export class User {
  async getSettings(id: string) {
    return await customAxios.get(`user/settings/${id}`);
  }
  async getUser(id: string) {
    return await customAxios.get(`user/${id}`);
  }
}
