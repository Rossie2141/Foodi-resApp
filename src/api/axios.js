import axios from 'axios';

const api = axios.create({
  baseURL: 'https://foddie-res-app-backend.vercel.app', 
  withCredentials: true, // THIS IS THE MOST IMPORTANT LINE
});

export default api;