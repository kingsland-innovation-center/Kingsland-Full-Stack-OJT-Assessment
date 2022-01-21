import axios from "axios";
const token = localStorage.getItem("user");

export const instance = axios.create({
  baseURL: "http://localhost:3100/",
  headers: { Authorization: `Bearer ${JSON.parse(token)}` },
});
