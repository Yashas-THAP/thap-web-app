import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { ThemeProvider } from '@mui/material/styles';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'
import { useScreenSize } from '@/lib/globalHooks';
import { SidebarTheme } from '@/lib/theme';
import SidebarItemAdmin from './SideBarItemAdmin';
import access from '@/auth/AccessControl';

const SideBar: FC<SideBarProps> = (props) => {
  const currentPathname = usePathname()
  const { expandSideBar, handleSidebarToggle } = props;
  const [selected, setSelected] = useState('/dashboard');
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const bookingRoutes = ['/bookings', '/createBooking', '/createBooking/bulkUpload']

  const handleSelectedMenu = (value: string): void => {
    setSelected(value);
  };

  const handleOpenedMenu = (value: string | null): void => {
    setOpenMenu(value);
  };


  const screenSize = useScreenSize?.();
  const handleDrawerClose = useCallback(() => {
    handleSidebarToggle?.();
  }, [handleSidebarToggle]);


  // This useEffect runs on every path change and sets the selected side bar item 
  // and open's the side bar nested menu if any..
  useEffect(() => {
    handleOpenedMenu(null)
    if (bookingRoutes.includes(currentPathname)) {
      setSelected('/bookings')
    } else {
      setSelected(currentPathname)
    }
  }, [currentPathname])


  const sideBarFeatures = [
    {
      text: 'Dashboard',
      path: '/dashboard',
      className: 'dashboard__icon',
      toolTip: 'Dashboard',
      isAccessible: true
    },
    {
      text: 'Bookings',
      path: '/bookings',
      className: 'bookings__icon',
      toolTip: 'Bookings',
      isAccessible: true
    },
    {
      text: 'Availability',
      path: '/therapisAvailability',
      className: 'bookings__icon',
      toolTip: 'Availability',
      isAccessible: true
    },
    {
      text: 'Tasks',
      path: '/tasks',
      className: 'tasks__icon',
      toolTip: 'Tasks',
      isAccessible: access?.irf?.view() || access?.survey?.view() || access?.installation?.view() || access?.commissioning?.view() || access?.welcomeCall?.view()
    },
    {
      text: 'Customers',
      path: '/customers',
      className: 'customers__icon',
      toolTip: 'Customers',
      isAccessible: access?.customer?.view()
    },
    {
      text: 'Tickets',
      path: '/tickets',
      className: 'tickets__icon',
      toolTip: 'Tickets',
      isAccessible: access?.ticket?.view()
    },
    {
      text: 'Assets',
      path: '/assets',
      className: 'assets__icon',
      toolTip: 'Assets',
      isAccessible: access?.asset?.view()
    },
    {
      text: 'Sales orders',
      path: '/salesOrders',
      className: 'sales__icon',
      toolTip: 'Sales orders',
      isAccessible: access?.salesOrder?.view()
    },
    {
      text: 'Users',
      path: '/users',
      className: 'organisations__icon',
      toolTip: 'Users',
      isAccessible: access?.user?.view()
    },
  ];

  const filteredSideBarItems = sideBarFeatures?.filter((item) => {
    return item?.isAccessible
  })

  const drawer = (
    <List component="nav" style={{ borderRight: '0px', padding: 0 }}>
      {filteredSideBarItems?.map((feature, index) => (
        <SidebarItemAdmin
          toggleOpen={openMenu}
          handleOpenedMenu={handleOpenedMenu}
          selected={selected}
          handleSelect={handleSelectedMenu}
          handleDrawerClose={handleDrawerClose}
          {...feature}
          key={index}
        />
      ))}
    </List>
  );

  return (
    <ThemeProvider theme={SidebarTheme}>
      <Drawer
        variant="permanent"
        className="app__sidebar"
        ModalProps={{
          keepMounted: true,
        }}
        open={expandSideBar}
        onClose={handleDrawerClose}
        sx={{
          display: 'block',
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: expandSideBar ? 230 : 55,
            borderRight: 0,
            boxShadow:
              '0px 6px 4px -2px rgba(0,0,0,0.005), 0px 8px 6px 3px rgba(0,0,0,0.04), 0px 1px 5px 0px rgba(0,0,0,0.05)',
          },
        }}
      >
        {drawer}
        {/* <div className='app__version'>

          {localStorage?.getItem('spin-rms-app-version') !== null && 
            moment(new Date(localStorage?.getItem('spin-rms-app-version') as string)).format('lll')}</div> */}
      </Drawer>
    </ThemeProvider>
  );
};

export default SideBar;
