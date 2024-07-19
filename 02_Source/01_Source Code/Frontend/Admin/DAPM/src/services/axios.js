import axios from "axios";
const baseURL = import.meta.env.VITE_API_URL;

const authRequest = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        common: {
            "Content-Type": 'application/x-www-form-urlencoded'
        }
    }
});

authRequest.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.code === 'ECONNABORTED') {
        alert("No response, please try again later!");
        return;
    }
    return Promise.reject(error);
});

const request = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        common: {
            Authorization: "Bearer " + localStorage.getItem('token')
        }
    }
})

request.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.code === 'ECONNABORTED') {
        alert("No response, please try again later!");
        return;
    } else if (error.response.status == 401) {
        window.location('/sign-in');
    }
    return Promise.reject(error);
});

export { request, authRequest };