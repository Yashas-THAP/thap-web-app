import axiosInstance from "@/service/Axios"
import { availabilityActions } from "../reduxExports"
import therapistStore from "../store";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchAvailability: any = (reqBody: any) => async (dispatch: (arg0: Partial<AvailabilityAction>) => void): Promise<void> => {
    try {
      const loaderStartAction: Partial<AvailabilityAction> = {
        type: availabilityActions.SET_AVAILABILITY_LOADER,
        availabilityLoader: true
      }
      dispatch(loaderStartAction);
    //   const searchHash = reqBody?.search
    //   const hashAction : Partial<AvailabilityAction> = {
    //     type : availabilityActions.SET_BOOKING_LIST_REQUEST_HASH,
    //     availabilityListRequestHash : searchHash
    //   }
    //   dispatch(hashAction)
      const response = await axios.post(url + '/therapistFetchAvailability', reqBody);

      console.log('availability response: ' + JSON.stringify(response));
      
        const action: Partial<AvailabilityAction> = {
            type: availabilityActions.FETCH_AVAILABILITY_DATA,
            availability: response.data?.data?.availability,
            availabilityCount: response.data?.data?.totalCount,
        }
        dispatch(action);
      
      if (response?.status === 200) {
        const loaderEndAction: Partial<AvailabilityAction> = {
          type: availabilityActions.SET_AVAILABILITY_LOADER,
          availabilityLoader: false
        }
        dispatch(loaderEndAction);
      }
    } catch (error) {
      const loaderEndAction: Partial<AvailabilityAction> = {
        type: availabilityActions.SET_AVAILABILITY_LOADER,
        availabilityLoader: false
      }
      dispatch(loaderEndAction);
      console.error(error)
      throw error
    }
  }

  export const addSlots: any = (reqBody: any) => async (dispatch: (arg0: Partial<AvailabilityAction>) => void): Promise<void> => {
    try {
      const loaderStartAction: Partial<AvailabilityAction> = {
        type: availabilityActions.SET_AVAILABILITY_LOADER,
        availabilityLoader: true
      }
      dispatch(loaderStartAction);
    //   const searchHash = reqBody?.search
    //   const hashAction : Partial<AvailabilityAction> = {
    //     type : availabilityActions.SET_BOOKING_LIST_REQUEST_HASH,
    //     availabilityListRequestHash : searchHash
    //   }
    //   dispatch(hashAction)
      const response = await axios.post(url + '/therapistAddSlots', reqBody);

      console.log('availability response: ' + JSON.stringify(response));
        
      const action: Partial<AvailabilityAction> = {
          type: availabilityActions.FETCH_AVAILABILITY_DATA,
          availability: response.data?.data?.availability,
          availabilityCount: response.data?.data?.totalCount,
      }
      dispatch(action);
      
      if (response?.status === 200) {
        const loaderEndAction: Partial<AvailabilityAction> = {
          type: availabilityActions.SET_AVAILABILITY_LOADER,
          availabilityLoader: false
        }
        dispatch(loaderEndAction);
      }
    } catch (error) {
      const loaderEndAction: Partial<AvailabilityAction> = {
        type: availabilityActions.SET_AVAILABILITY_LOADER,
        availabilityLoader: false
      }
      dispatch(loaderEndAction);
      console.error(error)
      throw error
    }
  }