import axios from "axios"
import { API_URL } from "../constant"
// IMPORT THE getToken FUNCTION HERE
import { getToken } from "./storage"; 

export const instance = axios.create({
baseURL: API_URL,
 timeout: 10000,
})

// === ADD THIS BLOCK OF CODE ===
// This interceptor automatically attaches the JWT to every request
instance.interceptors.request.use(
    (config) => {
        // 1. Get the token from the browser's storage
        const token = getToken("access_token");

        // 2. If the token exists, add it to the Authorization header
        if (token) {
            // Standard format: 'Authorization: Bearer <TOKEN>'
            config.headers.Authorization = `Bearer ${token}`;
        }
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
// === END OF BLOCK ===