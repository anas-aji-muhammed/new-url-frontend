import axios from 'axios';

const config = {
    baseURL: 'https://strong-saved-adder.ngrok-free.app/api/',
    // Add other global configs here
};

const axiosInstance = axios.create({
    baseURL: config.baseURL,
    // You can add more default settings here, like headers
    headers: {
        'Content-Type': 'application/json',
        // Add other global headers here
    },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(request => {
    // Modify request here if needed
    return request;
});

// Add a response interceptor
axiosInstance.interceptors.response.use(response => {
    // Handle global response behavior
    return response;
}, error => {
    // Handle global errors
    return Promise.reject(error);
});

export default axiosInstance;
