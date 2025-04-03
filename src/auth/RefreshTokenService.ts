
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import authService from './AuthService';
import localStorageInstance from '@/service/LocalStorageService';
import LocalStorage from '@/service/LocalStorage';
import therapistStore from '@/reduxStore/store';

class RefreshTokenService {
  private refreshTask: Promise<AxiosResponse> | null = null;

  public callRefreshToken(
    originalRequest: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    if (this.refreshTask) {
      return new Promise<AxiosResponse>((resolve) => {
        const pendingRequestConfig = originalRequest;
        this.refreshTask?.finally(() => { resolve(this.reCall(pendingRequestConfig)); });
      });
    }

    const refreshToken = localStorageInstance.getRefreshToken();

    const request = {
        refreshToken: refreshToken
        ? refreshToken
        : localStorageInstance.getAccessToken(),
    };
    const recallRequest = originalRequest;
    this.refreshTask = authService.fetchAccessTokenAndRefresh(request)
      .then((response) => {
        if (
          response &&
          response.data &&
          (response.status === 201 || response.status === 200 || response.status === 202)
        ) {
          localStorageInstance.setAccessToken(response?.data?.data?.accessToken);
          return this.reCall(recallRequest);
        } else {
          // const logoutData = {
          //   userId: LocalStorage?.load('user_id'),
          //   sessionId: LocalStorage?.load('sessionId'),
          // };
          // authService.handleLogout(logoutData);
          LocalStorage.clearLocalStorage();
          therapistStore.dispatch({ type: 'RESET_LOGOUT' })
          window.location.reload();
          throw new Error('Token refresh failed');
        }
      })
      .catch(() => {
        throw new Error('Token refresh failed');
      })
      .finally(() => {
        this.refreshTask = null;
      });

    return this.refreshTask;
  }

  private reCall(originalRequest: AxiosRequestConfig): Promise<AxiosResponse> {
    originalRequest.headers = {
      ...originalRequest.headers,
      Authorization: localStorageInstance.getAccessToken(),
    };

    return axios(originalRequest);
  }
}

const refreshTokenInstance = new RefreshTokenService();
export default refreshTokenInstance;
