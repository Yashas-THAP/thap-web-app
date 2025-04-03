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
import SideBarTherapist from '@/components/SideBarTherapist/SideBarTherapist';

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
  const [webSocket, setWebSocket] = useState<WebSocket>();  

  useEffect(() => {
    const therapistId = 1;
    const ws = new WebSocket(
      ` wss://ijhqdamveb.execute-api.ap-south-1.amazonaws.com/stage/?therapistId=${therapistId}`,
    );
    setWebSocket(ws);

    ws.onopen = () => {
      console.log("WebSocket connected");
    };

    ws.onmessage = (event) => {
      console.log(event.data);
    };

    ws.onclose = () => {
      console.log("WebSocket closed");
    };

    return () => {
      ws.close();
    };
  },[screenSize?.width]);

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
            <SideBarTherapist handleSidebarToggle={handleSidebarToggle} expandSideBar={expandSideBar} />
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