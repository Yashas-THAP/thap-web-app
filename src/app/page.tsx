import '../crmAssets/crmIcons.css'
import { redirect } from 'next/navigation';
import appUser from '@/auth/AppUser';
import access from '@/auth/AccessControl';

export default function App() {
  
  const checkAuthentication = () => {
    const isLoggedIn = appUser.isLoggedIn();
    if (isLoggedIn) {
      redirect(access?.dashboard?.view() ? '/dashboard' : '/tasks');
    } else {
      redirect('/therapistLogin')
      // redirect('/home')
    }
  }
  return (
    <main className={'d-flex'}>
      {checkAuthentication()}
    </main>
  );
}
