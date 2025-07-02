import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', // URL do backend
});

// Intercepta requisições e adiciona o token JWT
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
