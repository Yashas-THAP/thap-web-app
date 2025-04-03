
import { cloneDeep } from 'lodash';
import { bookingsActions, getPreSignedURL } from '../reduxExports';
import axiosInstance from '@/service/Axios';
import therapistStore from '../store';
import axios, { isAxiosError } from 'axios';

const url = process.env.NEXT_PUBLIC_BASE_URL;

export const setBookingTableProps: any = (data: any) => async (dispatch: (arg0: Partial<BookingsAction>) => void): Promise<void> => {
  const action: Partial<BookingsAction> = {
    type: bookingsActions.SET_BOOKINGS_TABLE_PROPS,
    bookingsTableProps: data,
  };
  dispatch(action);
}

export const deleteBookingWithId: any = async (bookingId: string) => {
  try {
    const response = await axiosInstance.delete(url + '/bookings/' + bookingId);
    if (response?.status === 200 || response?.status === 201) {
      return { status: 'SUCCESS', data: response?.data?.data }
    } else {
      return { status: 'FAILURE' };
    }
  } catch {
    return { status: 'FAILURE' };
  }
}



// TODO: Bookings List API
export const fetchBookings: any = (reqBody: any) => async (dispatch: (arg0: Partial<BookingsAction>) => void): Promise<void> => {
  try {
    // const loaderStartAction: Partial<BookingsAction> = {
    //   type: bookingsActions.SET_BOOKINGS_LOADER,
    //   bookingsLoader: true
    // }
    // dispatch(loaderStartAction);
    const searchHash = reqBody?.search
    const hashAction : Partial<BookingsAction> = {
      type : bookingsActions.SET_BOOKING_LIST_REQUEST_HASH,
      bookingsListRequestHash : searchHash
    }
    dispatch(hashAction)
    const response = await axiosInstance.post(url + '/bookings/list', reqBody)
    if (searchHash === therapistStore.getState().bookingsReducer.bookingsListRequestHash) {
      const action: Partial<BookingsAction> = {
        type: bookingsActions.FETCH_BOOKINGS_DATA,
        bookings: response.data?.data?.bookings,
        bookingsCount: response.data?.data?.totalCount,
        bookingsListFetchTime: new Date()
      }
      dispatch(action)
    }
    if (response?.status === 200) {
      const loaderEndAction: Partial<BookingsAction> = {
        type: bookingsActions.SET_BOOKINGS_LOADER,
        bookingsLoader: false
      }
      dispatch(loaderEndAction);
    }
  } catch (error) {
    const loaderEndAction: Partial<BookingsAction> = {
      type: bookingsActions.SET_BOOKINGS_LOADER,
      bookingsLoader: false
    }
    dispatch(loaderEndAction);
    console.error(error)
    throw error
  }
}



// UPDATE BOOKING ON SERVER
export const updateBooking: any = (bookingId: any, value: any, key: any, nestedKey?: any) => async () => {
  try {
    const reqBody = {
      entity: 'booking',
      field: nestedKey ? nestedKey : key,
      value: value ?? ''
    }
    const response = await axiosInstance.put(url + `/bookings/${bookingId}`, reqBody)
    if (response?.status === 200 || response?.status === 201) {
      return { status: 'SUCCESS', data: response?.data?.data }
    }
    return { status: 'FAILURE' };

  } catch (error) {
    if (isAxiosError(error)) {
      if (error?.response?.data?.status?.code === 5000) {
        return { status: 'FAILURE', message: error?.response?.data?.status?.message }
      }
      return { status: 'FAILURE' };
    } else {
      return { status: 'FAILURE' };
    }
  }
}

//Download-bulk-template
export const fetchTemplateUrl: any = async (reqBody: any) => {
  try {
    const response = await axiosInstance.post(url + '/download-template', reqBody);
    if (response?.status === 200 || response?.status === 201)
      return { status: 'SUCCESS', data: response?.data?.data }
    else {
      return { status: 'FAILURE' };
    }
  } catch {
    return { status: 'FAILURE' };
  }
}

export const uploadBulkBookingFile: any = async (file: File, presignedreqBody: any) => {
  try {
    const presignedUrlResponse = await getPreSignedURL(presignedreqBody);
    const uploadResponse = await axios.put(presignedUrlResponse?.data?.preSignedUrl, file,{headers: {'x-ms-blob-type' : 'BlockBlob','Content-Type': file?.type }});
    if (uploadResponse?.status === 200 || uploadResponse?.status === 201) {
      return { status: 'SUCCESS', fileName: presignedUrlResponse?.data?.fileName };
    }
    else {
      return { status: 'FAILURE' };
    }
  } catch {
    return { status: 'FAILURE' };
  }
}

//Get-api
export const fetchFileHeaderNames: any = async (reqBody: any) => {
  try {
    const response = await axiosInstance.post(url + '/bookings/bulk/file-column-names/get', reqBody)
    if (response?.status == 200) {
      if (response?.data.status.code === 2000) {
        return { status: 'SUCCESS', data: response?.data?.data }
      }

      else {
        return { status: 'FAILURE' };
      }

    } else {
      return { status: 'FAILURE' };
    }
  } catch {
    return { status: 'FAILURE' };
  }

}

export const fetchValidatedBulkBookings: any = async (fileName: string, fieldMapData: any) => {
  const composeUrl = '/booking/create-bookings';
  const reqBody = {
    fileName: 'booking/' + fileName,
    createBooking: false,
    fieldMap: fieldMapData
  }
  const response = await axiosInstance.post(url + composeUrl, reqBody);

  if (response?.status == 200) {
    return { status: 'SUCCESS', data: response.data.data }
  } else {
    return { status: 'FAILURE' };
  }

}

//Validate-bulk-upload
export const fetchValidatedBulkBookingsData: any = (reqBody: unknown) => async (dispatch: (arg0: Partial<BookingsAction>) => void): Promise<void> => {
  const response = await axiosInstance.post(url + '/bookings/bulk/validate', reqBody);
  if (response?.status === 200) {
    const action: Partial<BookingsAction> = {
      type: bookingsActions.FETCH_VALIDATED_BULK_BOOKINGS,
      validatedBulkBookings: response.data?.data?.bookingDetails
    }
    dispatch(action);
    return response.data
  }
}

export const updatePageData: any = (activePage: any) => async (dispatch: (arg0: Partial<BookingsAction>) => void): Promise<void> => {
  const action: Partial<BookingsAction> = {
    type: bookingsActions.SET_ACTIVE_STEP,
    activeStep: activePage
  }
  dispatch(action)
}



export const fetchScopeByAccount: any = (accId: any, bookingId: any) => async () => {
  try {
    const reqParams = {
      accountId: accId,
      bookingId: bookingId
    }
    const response = await axiosInstance.get(url + '/bookings/scopes', { params: reqParams })
    if (response?.status === 200 || response?.status === 201) {
      return { status: 'SUCCESS', data: response?.data?.data }
    } else {
      return { status: 'FAILURE' };
    }
  } catch (error) {
    return { status: 'FAILURE' };
  }

}

// GENERATE IRF
export const generateIRF: any = (bookingId: any) => async () => {
  try {
    const response = await axiosInstance.post(url + `/irf/generate?bookingId=${bookingId}`)
    if (response?.status === 200 || response?.status === 201) {
      return { status: 'SUCCESS' }
    }
    return { status: 'FAILURE' };
  } catch (error) {
    if (isAxiosError(error)) {
      if (error?.response?.data?.status?.code === 5000) {
        return { status: 'FAILURE', message: error?.response?.data?.status?.message }
      }
      return { status: 'FAILURE' };
    } else {
      return { status: 'FAILURE' };
    }
  }
}