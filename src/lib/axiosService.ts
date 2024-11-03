import axios from "axios";

// Axios Interceptor Instance
const AxiosInstance = axios.create({
    baseURL: 'https://hoshan-api.liara.run'
});

AxiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token') || '';
        const accessToken = token;

        // If token is present, add it to request's Authorization Header
        if (accessToken) {
        }
        if (config.headers) config.headers.token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZiZTNlYzM3LTg2ZjgtNGQzMS04NjAyLTZiYzU3ZjkwZDk2MSIsImV4cCI6MTczMTY1MzI3N30.vpecNmddr_sPpaQY-XtpxDpFh6lvERd08Uf1yHBy4ak`;

        return config;
    },
    (error) => {
        // Handle request errors here
        return Promise.reject(error);
    }
);

export default AxiosInstance;