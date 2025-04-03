/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useScreenSize } from '@/lib/globalHooks';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import '../../crmAssets/crmIcons.css'
import '../../components/Components.css'
import SideBar from '@/components/sidebar/SideBar';
import TherapistReduxProvider from '../../reduxStore/provider';
import NavBar from '@/components/navbar/Navbar';
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
        <NavBar handleSidebarToggle={handleSidebarToggle} expandSideBar={expandSideBar} />
        <div className="app__layout__container">
          {(
            <SideBar handleSidebarToggle={handleSidebarToggle} expandSideBar={expandSideBar} />
          )}
          <div className={expandSideBar ? 'app__route__container ' : 'app__route__container without__side__bar'} >
            {children}
          </div>
          
        </div>
      </TherapistReduxProvider> :
        <></>
    </>

  );
}