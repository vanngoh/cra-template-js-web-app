import axios from 'axios';
import { message } from 'antd';

export const api = axios.create({
  baseURL: 'https://mock.codes',
  timeout: 10000, // Set timeout to 10 seconds
  withCredentials: true,
  retry: 0,
});

api.interceptors.request.use(
  (config) => {
    // Start loading indicator with given config
    // const token = localStorage.getItem("token");
    // if (token) {
    //   config.headers["Authorization"] = `${token}`;
    // }
    return config;
  },
  (error) => {
    console.log('AxiosError[Request]:', error);
    const { config } = error;
    // Start loading indicator with the given config
    return Promise.resolve(error.response.data);
  }
);

api.interceptors.response.use(
  (response) => {
    const responseData = response.data;
    const { config, data } = response;
    // Stop loading indicator with the given config
    return data;
  },
  (error) => {
    console.log('AxiosError[Response]:', error);
    if (error.code === 'ECONNABORTED' && error.config.retry < 3) {
      error.config.retry += 1;
      return api.request(error.config);
    }

    // Stop loading indicator with the given config
    if (error.response) {
      message.error(
        `http failed: ${error.response.status} ${error.response.statusText}`
      );
      return Promise.resolve(error.response.data);
    } else {
      message.error(error.message);
      return Promise.resolve(error.message);
    }
  }
);

export default api;
