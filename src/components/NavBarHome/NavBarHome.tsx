import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  useEffectOnce,
  useScreenSize,
} from '@/lib/globalHooks';
import { ThemeProvider } from '@emotion/react';
import { NavbarTheme } from '@/lib/theme';
import { useAppDispatch } from '@/reduxStore/hooks';
import { fetchCircleRefData, fetchFilterKeyRefData, fetchRolesRefData } from '@/reduxStore/reduxExports';
import therapistStore from '@/reduxStore/store';
import localStorageInstance from '@/service/LocalStorageService';
import { toast } from 'react-toastify';
import { fetchAccountUsersRefData } from '@/reduxStore/referenceDataRedux/referenceDataService';
// import { redirect } from 'next/dist/server/api-utils';


const NavBarHome: FC<SideBarProps> = (props) => {
  const { expandSideBar, handleSidebarToggle } = props;
  const dispatch = useAppDispatch()
  const screenSize = useScreenSize?.();
  const [anchorEl, setAnchorEl] = useState(null);
  const [userDetails, setUserDetails] = useState<IUser | null>(null);
  const router = useRouter();

  useEffectOnce(() => {
    /* fetch below APi's on every hard reload as layout is shared across 
    all routie having NavBar */
    // dispatch(fetchFilterKeyRefData())
    // dispatch(setFilterForDefaultValues());
    // dispatch(fetchCircleRefData());
    // dispatch(fetchRolesRefData());
    // dispatch(fetchAccountUsersRefData());
  })

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const handleMenu = (event: any): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleSideBar = useCallback(() => {
    handleSidebarToggle?.(!expandSideBar);
  }, [expandSideBar, handleSidebarToggle]);

  useEffect(() => {
    const user = localStorageInstance.fetchUser();
    setUserDetails(user);
  }, []);

  const handleUserLogout = async (): Promise<void> => {
    // const user = localStorageInstance?.fetchUser();
    // 
    // const res = await authService.handleLogout({
    //   userId: user?.id,
    //   sessionId: localStorage?.getItem('sessionId'),
    // });
    localStorage.clear();
    /* DISPATCHING RESET ACTION TO CLEAR THE PERSISTED REDUX STORE 
    AFTER CLEARING LOCAL STORAGE WINDOW RELOAD WON'T WORK AS IT HAS BEEN OVERRIDED BY REDUX PERSIST */
    therapistStore.dispatch({ type: 'RESET_LOGOUT' })
    window.location.reload();
    //   handleClose();
  };

  console.log('navbar');
  return (
    <ThemeProvider theme={NavbarTheme}>
      <AppBar
        position="fixed"
        component={'div'}
      >
        <Toolbar disableGutters={true} variant="dense">
          <>The Happiness Project</>

          <div className="app__navbar__right">
            <div className="app__navbar__profile" onClick={()=>{router.push('/therapistLogin')}}>
              
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontSize: '13px',
                  marginTop: '1px',
                  fontWeight: 300,
                  fontFamily: 'var(--font-family)',
                  marginRight: '5px',
                  marginLeft: '8px'
                }}
                className="navbar__profile__name"
              >
                Login
              </Typography>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>

  );
};
export default NavBarHome;
