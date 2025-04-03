'use client'
// import { CountryCode,CountryCallingCode ,isValidPhoneNumber } from 'libphonenumber-js';
import React, { useCallback, useEffect, useState } from 'react';
// import PhoneInput from 'react-phone-input-2';
// import { MuiOtpInput } from 'mui-one-time-password-input';
import 'react-phone-input-2/lib/material.css'
import './OpsUserLoginScreen.css';
import LocalStorage from '../../../service/LocalStorage';
// import authService from '@/auth/AuthService';
// import { allowedCountries, getCurrentCountryCode } from '@/lib/globalHooks';
import { usePathname, useRouter } from 'next/navigation';
import CustomInput from '@/components/CustomInput/CustomInput';
import {CustomButton} from '@/components/CustomButton/CustomButton';
import authService from '../../../auth/AuthService';
import DashboardLoader from '@/components/Loader/DashboardLoader';


// TODO: Handles User Login and OTP
const OpsUserLoginScreen = () => {
  const showOtpScreen = false;
  const router = useRouter();
  const pathName = usePathname();
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  // const [countryCode,setCountryCode] = useState('');
  // const [isValidPhone, setIsValidPhone] = useState(false);
  // const [touched, setTouched] = useState(false);
//   const [otp, setOtp] = useState('');
  // const [errorMessage, setErrorMessage] = useState<string>();
  const [showRefreshButton, setShowRefreshButton] = useState(false);
  const [showLoginLoader, setShowLoginLoader] = useState(false)

  // otp screen handlers..
//   const handleOtpChange = useCallback(
//     (newValue: string): void => {
//       if (errorMessage && errorMessage?.length > 0) {
//         setErrorMessage('');
//       }
//       setOtp(newValue);
//     },[errorMessage]);

  // const handleOtp = useCallback(async (req: IGenerateOtpRequest) => {
  //   // const sendOtpRequest = {
  //   //   ...req,
  //   //   platform: 'Web',
  //   //   deviceId: LocalStorage.load('deviceId')
  //   // }
  //   // setShowLoginLoader(true);
  //   const res = await authService.generateOtp(req);

  //   if (res?.status === 200 || res?.status === 202) {
  //     LocalStorage.save('authToken', res?.data?.data?.authToken);
  //   //   setShowLoginLoader(false);
  //     router?.push('/otp-validation');
  //   } else {
  //   //   setShowLoginLoader(false);
  //     if(res?.data?.status?.code === 5000){
  //       setErrorMessage(res?.data?.status?.message);
  //     }
  //     else {
  //       setErrorMessage('Something went wrong.');
  //     }
  //   }
  // }, []);

//   const handleComplete = useCallback(async (val: string) => {
//     const req = {
//       // sessionId: LocalStorage.load('sessionId'),
//       mobileNumber:  '1234567890',
//       otp: val,
//     };
//     handleLogin(req);
//   }, []);

  // const handleClickOfGetOtpBtn = useCallback(async () => {
  //   const val = phoneNumber?.slice(countryCode?.length);
  //   const req = { mobileNumber: val,countryCode:countryCode };
  //   handleOtp(req);
  // }, [phoneNumber]);

  // phone number screen handlers
  // const onMobileNumberChange = useCallback((value: string,data:{countryCode:CountryCode,dialCode:CountryCallingCode}): void => {
  //   setPhoneNumber(value);
  //   setCountryCode(data?.dialCode)
  //   if (errorMessage && errorMessage?.length > 0) {
  //     setErrorMessage('');
  //   }
  //   setIsValidPhone(isValidPhoneNumber(`+${value}`, data.countryCode));
  //   if(!isValidPhoneNumber(`+${value}`, data.countryCode) && value?.slice(data?.dialCode?.length)?.length > 0) setErrorMessage('Please enter a valid mobile number.')
  //   if (isValidPhoneNumber(`+${value}`, data.countryCode)) {
  //     const req = { mobileNumber: value?.slice(data?.dialCode?.length),countryCode: data?.dialCode };
  //     LocalStorage.save('mobileNumber', value?.slice(data?.dialCode?.length));
  //     LocalStorage.save('countryCode', data?.dialCode)
  //     handleOtp(req);
  //   }
  //   setTouched(true);
  // },[errorMessage])

//   const handleLogin = useCallback(async (req: IVerifyOtpRequest) => {
//     // setShowLoginLoader(true);
//     const res = await authService.handleSignIn(req);    
//     if (res?.status === 200 || res?.status === 202) {
//       LocalStorage.save('crm-user', res?.data?.data?.user);
//       LocalStorage.save('accessToken', res?.data?.data?.accessToken);
//       LocalStorage.save('refreshToken',res?.data?.data?.refreshToken);
//       LocalStorage.save('tenantId', res?.data?.data?.tenantId);
//     //   setShowLoginLoader(false);
//     //   router?.push(access?.dashboard?.view() ? '/dashboard' : '/tasks')
//     } else {
//     //   setShowLoginLoader(false);
//       if (res?.data?.status?.code === 5000) {
//         setErrorMessage(res?.data?.status?.message);
//       } 
//       else {
//         setErrorMessage('Something went wrong.');
//       }
//     }
//   }, [router]);
  
//   const handleClickOfResendOtpButton = useCallback((e) => {
//     e?.stopPropagation();
//     setOtp('')
//     setErrorMessage('')
//       const req = {
//         mobileNumber: LocalStorage.load('mobileNumber'),
//         countryCode: LocalStorage.load('countryCode')
//       }
//     handleOtp(req);
//     setShowRefreshButton(false)
//       setTimeout(function () {
//         if (pathName === '/otp-validation') setShowRefreshButton(true);
//       }, 30000);
    
//   },[])

  const handleOpsUserLogin = async (req: IOpsUserLoginRequest)=>{
    setShowLoginLoader(true);
    const res = await authService.handleOpsUserLogin(req);    
    console.log('res: ', res);
    if (res?.status === 200 || res?.status === 202) {
      LocalStorage.save('opsUserAccessToken', res?.data?.opsUserDetails.opsUserId);
      setShowLoginLoader(false);
      console.log('routing to Dashboard')
      router.replace('/opsUserHome')
    } else {
      setShowLoginLoader(false);
      // setErrorMessage('Something went wrong.');
    }
  };

  useEffect(() => {
   
    setTimeout(function () {
      if (pathName === '/otp-validation') setShowRefreshButton(true);
    }, 30000);
  }, [pathName]);


  return (
    <div className="crm__login__container">
      <DashboardLoader showLoader={showLoginLoader} />     
        <div className="crm__login__card">
          <div className="crm__login__logo-wrap">
            <div className="crm__login__logo crm__icon"></div>
            <p className="crm__login-header">
              Ops user login
            </p>
          </div>

          <div className="crm__login__form__field__wrap">
            <div className="crm__login__form__field-text">
              {'Enter email ID'}
            </div>
            <CustomInput 
              inputValue={emailId} 
              // className='crm__generateirf__dialog__input' 
              inputFieldId='emailId' 
              inputPlaceHolder='Email ID' 
              autoFocus  
              handleInputChange={((e: any) => {
                console.log(e);
                console.log('target valueL: ' +  e.target.value);
                setEmailId(e.target.value);
              })}
            />
            <CustomInput 
              inputValue={password} 
              // className='crm__generateirf__dialog__input' 
              inputFieldId='password' 
              inputPlaceHolder='Password' 
              autoFocus  
              handleInputChange={((e: any) => {
                console.log(e)
                setPassword(e.target.value);
              })}
            />
            <CustomButton
              buttonText='Add Item'
              buttonId='work__order__form_add_item_btn'
              btnClassName='work__order__form_add_item_btn'
              buttonVariant='outlined'
              buttonIconClassName='crm__add__new__btn__black__icon'
              handleClick={async () => { 
                console.log('click');
                handleOpsUserLogin({email: emailId, password: password});
                // const authResp = await authService.handleTherapistLogin({email: 'anjaly@thap.app', password:'anjaly'}); 
                // console.log('auth resp: ', authResp);
              }}
            />
            <div className="crm__login__form__field-input">
              {!showOtpScreen ? (
                //   <PhoneInput
                //     specialLabel={'Mobile Number *'}
                //     country={'in'/* getCurrentCountryCode() */}
                //     value={phoneNumber}
                //     onlyCountries={['in']/* allowedCountries */}
                //     onChange={onMobileNumberChange}
                //     placeholder="**********"
                //     autoFormat={true}
                //     enableSearch={true}
                //     countryCodeEditable={false}
                //     searchNotFound='No countries to show.'
                //     searchPlaceholder='Search'
                //     inputProps={{
                //       name: 'phone',
                //       required: true,
                //       autoFocus: true,
                //     }}
                //     onEnterKeyPress={() => {
                //       if (isValidPhone) {
                //         handleClickOfGetOtpBtn();
                //       }
                //     }}
                //     
                //     isValid={(value, country: any) =>
                //       touched
                //         ? isValidPhoneNumber(`+${value}`, country?.iso2)
                //         : true
                //     }
                //     // defaultErrorMessage={errorMessage || 'Please enter a valid number'}
                //   />    
                  <button style={{height: '20px'}} onClick={() => router.push('/therapistHome')}/>
              ) : (
                <div>
                  {/* <MuiOtpInput
                    className="crm__otp__field"
                    length={6}
                    value={otp}
                    onChange={handleOtpChange}
                    onComplete={handleComplete}
                    autoFocus={true}
                    validateChar={(val) => !isNaN(Number(val))}
                  />    */}
                  </div>         
              )}

              {/* {errorMessage && errorMessage?.length > 0 &&
                <div className="crm__login__form__error__message">
                 {errorMessage}
              </div>} */}
            </div>

            {showOtpScreen && (
              <div className="crm__login__form-resend-otp-wrap">
                <button className={showRefreshButton ? 'crm__login__form-resend-otp' : 'crm__login__form-resend-otp disabled'} 
                // onClick={(e) => handleClickOfResendOtpButton(e)}
                >
                  Resend OTP
                </button>
              </div>
            )}

            {showOtpScreen && (
              <div className="crm__login__form-login-edit-phone-number-wrap">
                <button className={'crm__login__form-login-edit-phone-number'} onClick={(e) => {
                  e?.stopPropagation();
                  router?.push('/')
                }}>
                  Edit mobile number
                </button>
              </div>
            )
          }
          </div>
        </div>
    </div>
  );
};

export default OpsUserLoginScreen;
