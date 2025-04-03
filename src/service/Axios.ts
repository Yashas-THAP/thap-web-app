import axios, { AxiosRequestHeaders } from 'axios';
import LocalStorage from './LocalStorage';
import refreshTokenInstance from '@/auth/RefreshTokenService';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    if (LocalStorage.load('accessToken')) {
      config.headers = {
        Authorization: LocalStorage.load('accessToken'),
      } as AxiosRequestHeaders;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    const canRefreshToken =
      error.response &&
      error.response.status &&
      (error.response.status === 401 || error.response.status === 403);
    const isRetryRequest =
      originalRequest._retry != undefined &&
      originalRequest._retry != null &&
      originalRequest._retry;
    if (canRefreshToken && !isRetryRequest) {
      originalRequest._retry = true;

      return refreshTokenInstance.callRefreshToken(originalRequest);
    }
    // return Error object with Promise

    return Promise.reject(error);
  }
);

export default axiosInstance;
