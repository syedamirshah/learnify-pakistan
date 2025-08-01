import axios from 'axios';

let baseURL = import.meta.env.VITE_API_BASE_URL;

// ✅ Remove trailing slash if present
if (baseURL.endsWith('/')) {
  baseURL = baseURL.slice(0, -1);
}

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      console.warn("Unauthorized. Redirecting to login...");
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
