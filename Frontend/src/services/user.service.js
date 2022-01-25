import axios from "axios";

class UserService {
  async getCurrentUser() {
    const id = localStorage.getItem("userId");
    const token = localStorage.getItem("user");
    
    const instance = axios.create({
      baseURL: "http://localhost:3100/",
      headers: { Authorization: `Bearer ${JSON.parse(token)}` },
    });
    
    if (id !== null && token !== null) {
      const response = await instance.get(`user/${id}`);
      return response.data;
    }
  }
}

export default new UserService();
