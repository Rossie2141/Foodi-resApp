import axios from "axios";

const api = axios.create({
  baseURL: "https://foddie-res-app-backend.vercel.app",
  withCredentials: true, // REQUIRED for session cookies
  timeout: 15000,
});

export default api;



