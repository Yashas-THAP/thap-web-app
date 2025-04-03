import LocalStorage from '@/service/LocalStorage';
import authService from './AuthService';

class AppUser {
  user: null | IUser = null;

  constructor() {
    this.sync();
  }

  sync():void {
    this.user = LocalStorage.load('crm-user') as unknown as IUser;
  }

  isLoggedIn = ():boolean => {
  // TODO: Please remove bypass once login api are ready... 
    if (!this.user) {
      this.sync();
    }
    return ((this.user != null) && authService.hasTokens()) as boolean;
  };

  isTherapistLoggedIn = (): boolean => {
    if (!this.user) {
      this.sync();
    }
    return ((this.user != null) && authService.hasTherapistToken()) as boolean;
  }

  isOpsLoggedIn = (): boolean => {
    if (!this.user) {
      this.sync();
    }
    return ((this.user != null) && authService.hasOpsToken()) as boolean;
  }
}

const appUser = new AppUser();
export default appUser;
