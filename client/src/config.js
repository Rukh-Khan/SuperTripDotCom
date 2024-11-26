const BACKEND_URL = import.meta.env.PROD
  ? import.meta.env.VITE_API_URL
  : "http://localhost:5000";

const config = {
  API_URL: BACKEND_URL,
};

export default config;