import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/",
});

export const login = async (username: string, password: string) => {
  const client_id = await api.get("/auth/credentials");
  const response = await axios.post("http://localhost:8000/o/token/", {
    grant_type: "password",
    username,
    password,
    client_id: client_id,
    client_secret: "",
  });
  localStorage.setItem("access_token", response.data.access_token);
  return response.data;
};

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // ← use ${token}, not $(token)
  }
  return config;
});

export default api;
