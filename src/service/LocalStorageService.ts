import LocalStorage from '@/service/LocalStorage';

class LocalStorageService {
   getRefreshToken = (): string | null => {
		const refreshToken = LocalStorage.load('refreshToken');
		if (!refreshToken) { return null; }
		return refreshToken;
  }
  
   getAccessToken = (): string | null => {
		const accessToken = LocalStorage.load('accessToken');
		if (!accessToken) { return null; }
		return accessToken;
  }

   setAccessToken = (data: unknown): void => {
		LocalStorage.save('accessToken', data);
	}

	fetchUser = (): IUser | null => {
		const user = LocalStorage.load('crm-user');
		if (!user) { return null; }
		return user as unknown as IUser;
	};
	
}

const localStorageInstance = new LocalStorageService();
export default localStorageInstance;