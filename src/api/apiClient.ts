import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://test-backend-1-p8xd.onrender.com",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 10000
});

export default apiClient;
