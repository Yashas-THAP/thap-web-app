/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useScreenSize } from '@/lib/globalHooks';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import '../../crmAssets/crmIcons.css'
import '../../components/Components.css'
import TherapistReduxProvider from '../../reduxStore/provider';
import HomeNavBar from '../../components/NavBarHome/NavBarHome';
import appUser from '@/auth/AppUser';

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter()
  const [expandSideBar, setExpandSideBar] = useState(true)
  const screenSize = useScreenSize?.()
  const handleSidebarToggle = useCallback((val: boolean | ((prevState: boolean) => boolean)) => { setExpandSideBar(val) }, [])

  const isLoggedIn = appUser.isLoggedIn();
  // if (!isLoggedIn) {
  //   router.replace('/therapistLogin');
  // }

  useEffect(() => {
    if (screenSize?.width <= 800) {
      handleSidebarToggle(false)
    } else {
      handleSidebarToggle(true)
    }
  }, [handleSidebarToggle, screenSize?.width])

  console.log('layout');
  return (
    <>
      <TherapistReduxProvider>
        <HomeNavBar handleSidebarToggle={handleSidebarToggle} expandSideBar={expandSideBar} />
        <div className="app__layout__container">
          <div className={ 'app__route__container without__side__bar'} >
            {children}
          </div>
        </div>
      </TherapistReduxProvider> :
        <></>
    </>

  );
}