/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/system/useTheme';
import { useEffect, useLayoutEffect, useState } from 'react';
import { AddNewBtnTheme, FilterButtonTheme, OutlinedBtnTheme } from './theme';

import moment from 'moment-timezone';
import therapistStore from '@/reduxStore/store';


const HeaderActionBtns = [
  {
    toolTipText: 'Add',
    iconClassName: 'crm__add__new__btn__icon',
    tooltipContainerClassName: 'tooltip__icon__wrapper',
    buttonId: 'add_new_btn',
    customTheme: AddNewBtnTheme,
    buttonText: 'Add',
    btnClassName: 'add__new__btn',
    handleClick: (): void => { },
    buttonVariant: '',
  },
  {
    toolTipText: 'Filters',
    iconClassName: 'crm__filter__btn__icon',
    tooltipContainerClassName: 'tooltip__icon__wrapper',
    buttonId: 'filter_btn',
    customTheme: FilterButtonTheme,
    buttonText: 'Filters',
    btnClassName: 'filter__btn',
    handleClick: (): void => { },
    buttonVariant: 'outlined',
  },
  {
    toolTipText: 'Group By',
    iconClassName: 'crm__groupby__btn__icon',
    tooltipContainerClassName: 'tooltip__icon__wrapper',
    buttonId: 'groupby_btn',
    customTheme: FilterButtonTheme,
    buttonText: 'Group By',
    btnClassName: 'groupby_btn',
    handleClick: (): void => { },
    buttonVariant: 'outlined',
  },

  {
    toolTipText: 'Export',
    iconClassName: '',//'crm__export__btn__icon',
    tooltipContainerClassName: 'tooltip__icon__wrapper-export',
    buttonId: 'export_csv_btn',
    buttonText: 'Export',
    btnClassName: 'export__csv__btn',
    customTheme: OutlinedBtnTheme,
    handleClick: (): void => { },
    buttonVariant: 'outlined',
  },
];

export const useEffectOnce = (effect: { (): void; (): void; (): void; }): void => {
  const [needToCall, setNeedToCall] = useState(false);

  useEffect(() => {
    if (needToCall) {
      effect();
    } else {
      setNeedToCall(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [needToCall]);
};

export const useScreenSize = (): ScreenSizeProp => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window === 'undefined' ? 1280 : window?.innerWidth,
    height: typeof window === 'undefined' ? 0 : window?.innerHeight,
  });

  useLayoutEffect(() => {
    const handleResize = (): void => {
      setScreenSize({
        width: window?.innerWidth,
        height: window?.innerHeight,
      });
    };

    window?.addEventListener('resize', handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window?.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
}

export const checkForScreenResolution = (val: any): ScreenResolutionProp => {
  const theme = useTheme();
  const result = useMediaQuery(theme.breakpoints.down(val));
  return { result, val };
};

export const formatNumberWithCommas = (numberOrString: string) => {
  const number = parseFloat(numberOrString);
  if (isNaN(number)) return numberOrString;
  return number.toLocaleString('en-IN');
};

export const formatBytesTillMB = (bytes: number) => {
  const KILOBYTE = 1024;
  const MEGABYTE = KILOBYTE * 1024;

  if (bytes < KILOBYTE) {
    return `${bytes} bytes`;
  } else if (bytes < MEGABYTE) {
    return `${(bytes / KILOBYTE).toFixed(2)} kB`;
  } else {
    return `${(bytes / MEGABYTE).toFixed(2)} MB`;
  }
}

export const resetToMidnight = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
};

export const calculateDateDifference = (inputDate: Date): string => {
  const currentDate = new Date();
  const targetDate = new Date(inputDate);

  let yearsDifference = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsDifference = currentDate.getMonth() - targetDate.getMonth();
  let daysDifference = currentDate.getDate() - targetDate.getDate();
  let hoursDifference = currentDate.getHours() - targetDate.getHours();
  let minutesDifference = currentDate.getMinutes() - targetDate.getMinutes();

  if (minutesDifference < 0) {
    hoursDifference -= 1;
    minutesDifference += 60;
  }

  if (hoursDifference < 0) {
    daysDifference -= 1;
    hoursDifference += 24;
  }

  if (daysDifference < 0) {
    monthsDifference -= 1;
    const daysInLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    daysDifference += daysInLastMonth;
  }

  if (monthsDifference < 0) {
    yearsDifference -= 1;
    monthsDifference += 12;
  }

  const yDisplay = yearsDifference > 0 ? yearsDifference + (yearsDifference === 1 ? ' year, ' : ' years, ') : '';
  const mDisplay = monthsDifference > 0 ? monthsDifference + (monthsDifference === 1 ? ' month, ' : ' months, ') : '';
  const dDisplay = daysDifference > 0 ? daysDifference + (daysDifference === 1 ? ' day, ' : ' days, ') : '';
  const hDisplay = hoursDifference > 0 ? hoursDifference + (hoursDifference === 1 ? ' hour ' : ' hours ') : '';
  const minDisplay = minutesDifference > 0 ? minutesDifference + (minutesDifference === 1 ? ' minute' : ' minutes') : '';

  const result = (yDisplay + mDisplay + dDisplay + hDisplay+ minDisplay).replace(/,\s*$/, '');
  return result || '0 minutes';
};

// Ex: Fri May 10 2024 15:15:12 GMT+0530 => 10 May  Current year not
// Fri May 10 2023 15:15:12 GMT+0530 => 10 May 2023
export const formatDateForTable = (dateString: Date): string => {
  if (moment(dateString).year() == new Date().getFullYear()) {
    return moment(dateString).format('DD MMM')
  }
  return moment(dateString).format('DD MMM YYYY')
}

// Ex: Fri May 10 2024 15:15:12 GMT+0530 => 10 May 2024
export const formatDateWithYear = (dateString: any): string => {
  return moment(dateString).format('DD MMM YYYY')
}

export const formatDateForWeek = (inputDate: Date): string => {
  const dayOfWeek = inputDate.getDay();

  // Calculate the difference to Monday (adjust for Sunday which is 0)
  const diffToMonday = (dayOfWeek === 0 ? 6 : dayOfWeek - 1);

  // Calculate the Monday of the current week
  const monday = new Date(inputDate);
  monday.setDate(inputDate.getDate() - diffToMonday);

  // Calculate the Sunday of the current week
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);

  return  formatDateForTable(monday) + ' - ' + formatDateForTable(sunday);
}

export const getDateRangeForWeek = (inputDate: Date): {startDate: Date, endDate: Date} => {
  const dayOfWeek = inputDate.getDay();

  // Calculate the difference to Monday (adjust for Sunday which is 0)
  const diffToMonday = (dayOfWeek === 0 ? 6 : dayOfWeek - 1);

  // Calculate the Monday of the current week
  const monday = new Date(inputDate);
  monday.setDate(inputDate.getDate() - diffToMonday);

  // Calculate the Sunday of the current week
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  return {startDate: monday, endDate: sunday};
}

export const formatDateWithFullDay = (dateString: any): string => {
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  
  if (moment(dateString).year() == new Date().getFullYear()) {
    return days[moment(dateString).day()] +', ' + moment(dateString).format('DD MMM');
  }
  return days[moment(dateString).day()] + ', ' + moment(dateString).format('DD MMM YYYY');
}
// Ex: Fri May 10 2024 15:15:12 GMT+0530 => 10 May 2024 15:15 PM
export const formatDateWithTime = (dateString: Date): string => {
  return moment(dateString).format('DD MMM YYYY h:mm A');
}

export const formatRelativeDateTime = (postDate: { getTime: () => number; }): string => {
  const now: Date = new Date();
  const secondsAgo: number = Math.floor((now.getTime() - postDate.getTime()) / 1000);

  if (!isNaN(postDate.getTime())) {
    if (secondsAgo <= 0) {
      return 'Refreshed just now';
    } else
      if (secondsAgo < 60) {
        return `Last refreshed ${secondsAgo} second${secondsAgo !== 1 ? 's' : ''} ago`;
      } else if (secondsAgo < 3600) {
        const minutesAgo = Math.floor(secondsAgo / 60);
        return `Last refreshed ${minutesAgo} minute${minutesAgo !== 1 ? 's' : ''} ago`;
      } else if (secondsAgo < 86400) {
        const hoursAgo = Math.floor(secondsAgo / 3600);
        return `Last refreshed ${hoursAgo} hour${hoursAgo !== 1 ? 's' : ''} ago`;
      } else if (secondsAgo < 604800) {
        const weeksAgo = Math.floor(secondsAgo / 604800);
        return `Last refreshed ${weeksAgo} week${weeksAgo !== 1 ? 's' : ''} ago`;
      } else {
        const daysAgo = Math.floor(secondsAgo / 86400);
        return `Last refresed ${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`;
      }
  } else {
    return 'Refreshed just now'
  }

}

// Ex: Fri May 10 2024 15:15:12 GMT+0530 => 2024-05-10
export const formatDateToLocalDate = (dateString: number | Date) : string => {
  return moment(dateString).format('YYYY-MM-DD')
}

export const getFirstDateOfCurrentQuarter = () => {
  const now = new Date();
  const currentMonth = now?.getMonth();
  const startMonth = Math.floor(currentMonth / 3) * 3;
  const firstDateOfQuarter = new Date(now?.getFullYear(), startMonth, 1);
  return formatDateToLocalDate(firstDateOfQuarter);
};

export const downloadFile = ({ url }: any): void => {
  try {
    // Open the file in a new tab or window
    window.open(url, '_blank');
  } catch (error) {
    console.error(error);
  }
};

// RETURNS THE FIRST TWO INITIALS OF A NAME
export const getInitialsOfName = (fullName: string) => {
  if (!fullName) return
  const nameParts = fullName.split(' ');
  let initials = '';
  for (const part of nameParts) {
      if (part.length > 0) {
          initials += part[0].toUpperCase();
      }
  }
  return initials?.slice(0,2);
}

export const getFileExtension = (fileName: string) => {
  const regex = new RegExp('[^.]+$');
  const extension = fileName?.match(regex);
  return extension?.[0] ?? 'csv'
}

//TODO: Key Press Validation for Only Characters
export const keyPressValidationForCharacters = (event: { key: any; target: { value: any; }; ctrlKey: any; metaKey: any; preventDefault: () => void; }, maxCount?:number): void => {
  const keyPressed = event.key;
  const inputValue = event.target.value;
  // Allow Ctrl+C (copy) and Ctrl+V (paste) and backspace and space
  if (keyPressed === ' ' || keyPressed === 'Backspace'||  keyPressed === 'Delete'  || keyPressed === 'Tab' || ((event.ctrlKey || event.metaKey) && (keyPressed.toLowerCase() === 'c' || keyPressed.toLowerCase() === 'v'|| keyPressed.toLowerCase() === 'a'))) return;
  // Prevent default action if the key is not a letter
  if (!(/^[a-zA-Z]+$/.test(keyPressed)) || ( maxCount && inputValue.length>maxCount) ) event.preventDefault();
}
export const keyPressValidationForLength = (event: { key: any; target: { value: any; }; ctrlKey: any; metaKey: any; preventDefault: () => void; }, maxCount?:number): void => {
  const keyPressed = event.key;
  const inputValue = event.target.value;
  // Allow Ctrl+C (copy) and Ctrl+V (paste) and backspace and space
  if (keyPressed === ' ' ||  keyPressed === 'Backspace' ||  keyPressed === 'Delete'  || keyPressed === 'Tab' || ((event.ctrlKey || event.metaKey) && (keyPressed.toLowerCase() === 'c' || keyPressed.toLowerCase() === 'v' || keyPressed.toLowerCase() === 'a'))) return;
  // Prevent default action if the key is not a letter
  if (( maxCount && inputValue.length>maxCount) ) event.preventDefault();
}

//TODO: Key Press Validation for PINCode
export const keyPressValidationForPINCode = (event: { key: any; ctrlKey: any; metaKey: any; target: { value: any; }; preventDefault: () => void; }): void => {
  const keyPressed = event.key;
  // Allow Ctrl+C (copy) and Ctrl+V (paste) and Backspace
  if (keyPressed === 'ArrowLeft' || keyPressed === 'Delete'  ||  keyPressed === 'ArrowRight' ||keyPressed === 'Backspace' || keyPressed === 'Tab' || ((event.ctrlKey || event.metaKey) && (keyPressed.toLowerCase() === 'c' || keyPressed.toLowerCase() === 'v' || keyPressed.toLowerCase() === 'a' || keyPressed.toLowerCase() === 'z' || keyPressed.toLowerCase() === 'x'))) return;
  // Check if the input is a digit and the length of the input should not exceed 6 digits
  const inputValue = event.target.value + keyPressed;
  if (!(/^\d$/.test(keyPressed)) || inputValue.length > 6) {
    event.preventDefault();
  }
}

export const keyPressValidationForPhoneNumber = (event: { key: any; ctrlKey: any; metaKey: any; preventDefault: () => void; }): void => {
  const keyPressed = event.key;
  // Allow Ctrl+C (copy) and Ctrl+V (paste) and Backspace
  if (keyPressed === 'ArrowLeft' ||  keyPressed === 'Delete'  ||  keyPressed === 'ArrowRight' || keyPressed === 'Backspace' || keyPressed === 'Tab' || ((event.ctrlKey || event.metaKey) && (keyPressed.toLowerCase() === 'c' || keyPressed.toLowerCase() === 'v' || keyPressed.toLowerCase() === 'a'|| keyPressed.toLowerCase() === 'z' || keyPressed.toLowerCase() === 'x'))) return;
  if (!(/^\d$/.test(keyPressed))) {
    event.preventDefault();
  }
}

export const keyPressValidationForAlphaNumeric = (event: { key: any; target: { value: any; }; ctrlKey: any; metaKey: any; preventDefault: () => void; },maxCount?:number): void => {
  const keyPressed = event.key;
  const inputValue = event.target.value;
  // Allow Ctrl+C (copy) and Ctrl+V (paste) and backspace and space
  if (keyPressed === ' ' || keyPressed === 'Backspace' ||  keyPressed === 'Delete'  || keyPressed === 'Tab' || ((event.ctrlKey || event.metaKey) && (keyPressed.toLowerCase() === 'c' || keyPressed.toLowerCase() === 'v' || keyPressed.toLowerCase() === 'a'))) return;
  // Prevent default action if the key is not a letter or a number or when its count exceeds the maxCount
  if (!(/^[a-zA-Z0-9]+$/.test(keyPressed)) || ( maxCount && inputValue.length>maxCount) ) event.preventDefault();
}


export const checkLengthValidationPaste = (value: string, maxCount?:number): string => {
  return ( maxCount && maxCount < value.length ? value.slice(0,maxCount)  : value ) 
}

export const checkAlphaNumericPaste = (value: string,maxCount?:number): string => {
  return /^[a-zA-Z0-9\s]+$/.test(value) ? ( maxCount && maxCount < value.length ? value.slice(0,maxCount)  : value ) : ''
}

export const checkCharactersPaste = (value: string,maxCount?: number): string => {
  return /^[a-zA-Z\s]+$/.test(value) ? ( maxCount && maxCount < value.length ? value.slice(0,maxCount): value) : ''
}

export const checkNumbersPaste = (e: { target: { value: string; }; }): string => {
  return /^\d+$/.test(e?.target?.value) ? e?.target?.value : ''
}



export const checkEmailValidation = (value: string) => {
  return /^[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,64}$/.test(value) ? true : false;
};

export const allowedCountries = ['in', 'my', 'sa', 'pt', 'pl', 'th', 'id', 'gb', 'nl']

export const getCurrentCountryCode = () => {
  // Get the time zone offset
  const timeZone = moment.tz.guess();
  // Map time zones to country codes
  const timeZoneMap = {
    'Asia/Calcutta': 'in',
    'Asia/Bangkok' : 'th',
    'Asia/Jakarta': 'id',
    'Europe/London': 'gb',
    'Asia/Kuala_Lumpur': 'my',
    'Europe/Amsterdam': 'nl',
    'Asia/Riyadh': 'sa',
    'Europe/Lisbon': 'pt',
    'Europe/Warsaw': 'pl'
  };
  // Check if the time zone is in the map
  return 'in';
}

export const renderHeaderActionButtons = ({
  actionBtns,
}: {
  actionBtns: IHeaderActionButton[];
}): HeaderActionBtn[] => {
  const updatedButtonsArray: HeaderActionBtn[] = actionBtns
    .filter((btn) =>
      HeaderActionBtns?.some((item) => item?.buttonId === btn?.id)
    )
    .map((btn) => {
      const btnProp = HeaderActionBtns?.find(
        (item) => item?.buttonId === btn?.id
      );

      if (btnProp) {
        const updatedBtn: HeaderActionBtn = {
          ...btnProp,
          buttonText: btn?.buttonText ?? btnProp?.buttonText,
          toolTipText: btn?.toolTipText ?? '',
          iconClassName: btn?.iconClassName ?? btnProp?.iconClassName,
          isAccessible: btn?.isAccessible,
          handleClick: btn?.headerActionBtnClick
            ? (event) => btn.headerActionBtnClick!(event)
            : (event) => { }, // Default to an empty function if undefined
          badgeCount: btn?.badgeCount
        };

        return updatedBtn;
      }

      return null; // Handle the case where btnProp is not found
    })
    .filter((btn) => btn !== null) as HeaderActionBtn[];

  return updatedButtonsArray;
};


export const getUserName = (userId: any) : string | null => {
  const userRefData  = therapistStore.getState().referenceDataReducer.userRefData
  return userRefData?.find((user: { id: any; }) => user?.id === userId)?.name ?? null
}


export const getManagerName = (userId: any) : string | null => {
  const userRefData  = therapistStore.getState().referenceDataReducer.userRefData
  const user = userRefData?.find((user: { id: any; }) => user?.id === userId)
  if (user) {
    return userRefData?.find((item: { id: any; }) => item?.id === user?.manager)?.name ?? null
  }
  return null
}

export const getRoleName = (userId: any):  string | null => {
  const userRefData  = therapistStore.getState().referenceDataReducer.userRefData
  return userRefData?.find((user: { id: any; }) => user?.id === userId)?.role ?? null
}

export const processAddress = (address: { line1: any; line2: any; city: any; state: any; postalCode: any; } | null, withPostalCode = true) => {
  if (address == null) return '--';
  const fullAddressList = [address.line1, address.line2, address.city, address.state, withPostalCode ? address.postalCode : null];
  const fullAddress = fullAddressList.filter(each => each != null && each.length > 0).join(', ');
  return (fullAddress == null || fullAddress.length == 0) ? '--' : fullAddress;
}

export const scrollToElement = (elementId: any) => {
  const element = document.getElementById(elementId ?? '');
  if (element) {
    element?.scrollIntoView({
      block: 'end',
      behavior: 'smooth',
      inline: 'end',
    });
    const container = element.parentElement;
    if (container)
      container.scrollTop = container?.scrollHeight - container?.clientHeight;
  }
}

export const generateDeviceId = () => {
  const uuid  = ([1e7] + '-' + 1e3 + '-' + 4e3 + '-' + 8e3 + '-' + 1e11).replace(/[018]/g, (c:any) =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
  return uuid + '-Web-' + Math.ceil((new Date()?.getTime() / 1000));
}

export const getUserLocation: any = () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    resolve({ latitude, longitude });
                },
                (error) => {
                    reject(`Error: ${error.message}`);
                }
            );
        } else {
            // Geolocation API not available
            reject('Geolocation is not supported by this browser.');
        }
    });
}

export const openGoogleMaps = (lat: number | undefined,long: number | undefined) => {
  if (lat && long) 
  window.open(`https://www.google.com/maps?q=${lat},${long}`,'blank')
}

export const getStringTrimmed = (input: string, maxLength: number = 20): string => {
  if (input.length <= maxLength) {
    return input;
  }
  return `${input.slice(0, maxLength - 3)}...`;
}

const globalHooksObject = {
  useScreenSize,
  checkForScreenResolution,
  useEffectOnce,
  formatNumberWithCommas,
  renderHeaderActionButtons,
  formatDateForTable,
  formatDateWithYear,
  formatDateForWeek,
  getDateRangeForWeek,
  formatDateWithFullDay,
  formatDateWithTime,
  formatBytesTillMB,
  formatRelativeDateTime,
  formatDateToLocalDate,
  downloadFile,
  getInitialsOfName,
  keyPressValidationForCharacters,
  keyPressValidationForPINCode,
  checkCharactersPaste,
  getFileExtension,
  allowedCountries,
  getCurrentCountryCode,
  keyPressValidationForPhoneNumber,
  checkNumbersPaste,
  keyPressValidationForAlphaNumeric,
  checkAlphaNumericPaste,
  getUserName,
  getManagerName,
  getRoleName,
  calculateDateDifference,
  processAddress,
  scrollToElement,
  getFirstDateOfCurrentQuarter,
  generateDeviceId,
  resetToMidnight,
  keyPressValidationForLength,
  checkLengthValidationPaste,
  getUserLocation,
  openGoogleMaps,
  getStringTrimmed,
};

export default globalHooksObject;
