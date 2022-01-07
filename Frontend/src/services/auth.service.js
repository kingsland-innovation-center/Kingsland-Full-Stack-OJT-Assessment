import axios from "axios";

const API_URL = "http://localhost:3100/user";

class AuthService {
  async login(username, password) {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(firstName, lastName, username, password) {
    return axios.post(`${API_URL}/register`, {
      firstName,
      lastName,
      username,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
