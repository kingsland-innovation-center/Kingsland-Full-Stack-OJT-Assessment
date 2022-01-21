import axios from "axios";

const API_URL = "http://localhost:3100/user";

class AuthService {
  async login(username, password) {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data.accessToken));
      localStorage.setItem("userId", JSON.stringify(response.data.id));

    }
    return response.data;
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
  }

  async register(firstName, lastName, username, password) {
    const response = await axios.post(`${API_URL}/register`, {
      firstName,
      lastName,
      username,
      password,
    });
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data.accessToken));
      localStorage.setItem("userId", JSON.stringify(response.data.id));

    }
    return response.data;
  }
}

export default new AuthService();
