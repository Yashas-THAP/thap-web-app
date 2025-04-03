
import LocalStorage from '../service/LocalStorage';
import axios, {isAxiosError} from 'axios';

class AuthService {
  isAuthenticated = true;
  url = process.env.NEXT_PUBLIC_BASE_URL;
  accessTokenKey   = 'accessToken';
  refreshTokensKey = 'refreshToken';
  therapistAccessTokenKey = 'therapistAccessTokenKey';
  opsAccessTokenKey = 'opsAccessTokenKey';

  hasTokens = ():boolean => { // See if tokens are available.
    return (LocalStorage.load(this.accessTokenKey) != null) && (LocalStorage.load(this.refreshTokensKey) != null);
  }

  hasTherapistToken = ():boolean => {
    return (LocalStorage.load(this.therapistAccessTokenKey) != null);
  }

  hasOpsToken = ():boolean => {
    return (LocalStorage.load(this.therapistAccessTokenKey) != null);
  }

  generateOtp = async (formData : any) => {

    try {
      const { data, status } = await axios.post(this.url + '/auth/send-otp', formData,
        { headers: { 'Content-Type': 'application/json', Accept: 'application/json', }, });
      return { data, status };
    } catch (error) {
      if (isAxiosError(error)) {
          if (error.response) {
            const data = error.response.data;
            const status = error.response.status;
            return { data, status };
          }
      }
    }
  }

  handleTherapistLogin = async ( therapistLoginRequest: ITherapistLoginRequest) => {
    try {
      const resp = await axios.post(this.url + '/therapistLogin', therapistLoginRequest,
        { headers: { 'Content-Type': 'application/json', }, }
      );
      console.log('resp: ', JSON.stringify(resp));
      return resp;
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response) {
          const data = error.response.data;
          const status = error.response.status;
          return { data, status };
        }
      }
      return { error: 'An unexpected error occurred during sign-in' };
    }
  }

  handleOpsUserLogin = async ( opsUserLoginRequest: IOpsUserLoginRequest) => {
    try {
      const resp = await axios.post(this.url + '/opsUserLogin', opsUserLoginRequest,
        { headers: { 'Content-Type': 'application/json', }, }
      );
      console.log('resp: ', JSON.stringify(resp));
      return resp;
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response) {
          const data = error.response.data;
          const status = error.response.status;
          return { data, status };
        }
      }
      return { error: 'An unexpected error occurred during sign-in' };
    }
  }

  handleSignIn = async (formData: any) => {
    try {
      const { data, status } = await axios.post(this.url + '/auth/verify-otp', formData,
        { headers: { 'Content-Type': 'application/json', }, }
      );
      return { data, status };
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response) {
          const data = error.response.data;
          const status = error.response.status;
          return { data, status };
        }
      }
      return { error: 'An unexpected error occurred during sign-in' };
    }
  }

  handleLogout = async (formData: any) => {
    try {
      const { data, status, } = await axios.post(this.url + '/auth/sign-out', formData,
        { headers: { 'Content-Type': 'application/json', }, }
      );
      return { data, status };
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response) {
          const data = error.response.data;
          const status = error.response.status;
          return { data, status };
        }
      }
      return { error: 'An unexpected error occurred during sign-out' };
    }
  }

  fetchAccessTokenAndRefresh = async (req: any) => {
    try {
      const response = await axios.post(this.url + '/auth/refresh-token', req);
      return response;
    } catch (error) { console.log(error); }
  }

}

const authService = new AuthService();
export default authService;
