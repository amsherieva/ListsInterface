import axios from "axios";

// Create axios instance
const axiosInstance = axios.create({
    baseURL: "https://lists.priem.etu.ru",
    headers: {
        "Content-Type": "application/json",
    }
});

// Add token in authorization header
axiosInstance.interceptors.request.use((config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
//console.log("Token: ", sessionStorage.getItem("token"));

export default axiosInstance;