import { instance } from "./axios";


class UserService {
  async getCurrentUser() {
    const id = localStorage.getItem("userId");
    const response = await instance.get(`user/${id}`);
    return response.data;
  }
}

export default new UserService();
