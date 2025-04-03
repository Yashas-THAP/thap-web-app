import axiosInstance from "@/service/Axios"
import { therapistUserActions } from "../reduxExports"
import therapistStore from "../store";

const url = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchTherapistUserDetails: any = (reqBody : any) => async (dispatch: (arg0: Partial<TherapistUserAction>) => void): Promise<void> => {
    try{
        const response = await axiosInstance.post(url + '/availability/list', reqBody);
      
        const action: Partial<TherapistUserAction> = {
            type: therapistUserActions.SET_THERAPIST_USER_DATA,
            therapistId: response?.data?.data.therapistId,
            therapistName: response?.data?.data.therapistName,
            therapistType: response?.data?.data.therapistType,
            therapistRating: response?.data?.data.therapistRating,
            therapistDp: response?.data?.data.therapistDp,
            therapistLanguages: response?.data?.data.therapistLanguages,
            therapistTherapyMethods: response?.data?.data.therapistTherapyMethods,
            therapistCategories: response?.data?.data.therapistCategories,
            therapistCutoffOptions: response.data?.data.therapistCutoffOptions
        }
        dispatch(action)
      
        if (response?.status === 200) {
            const loaderEndAction: Partial<AvailabilityAction> = {
            type: therapistUserActions.SET_THERAPIST_USER_LOADER,
            availabilityLoader: false
            }
            dispatch(loaderEndAction);
        }
    }
    catch (error) {
        const loaderEndAction: Partial<AvailabilityAction> = {
          type: therapistUserActions.SET_THERAPIST_USER_LOADER,
          availabilityLoader: false
        }
        dispatch(loaderEndAction);
        console.error(error)
        throw error
      }
}

export const setTherapistUserDetails:  any = (reqBody : any) => async (dispatch: (arg0: Partial<TherapistUserAction>) => void): Promise<void> => {
    try{
        console.log('set therapist state');
        const action: Partial<TherapistUserAction> = {
            type: therapistUserActions.SET_THERAPIST_USER_DATA,
            therapistId: reqBody.expertId,
            therapistName: reqBody.expertName,
            therapistType: reqBody.therapistType,
            therapistRating: reqBody.rating,
            therapistDp: reqBody.expertDp,
            therapistLanguages: reqBody.languages,
            therapistTherapyMethods: reqBody.categories,
            therapistCategories: reqBody.categories,
            therapistCutoffOptions: reqBody.cutoffOptions,
        }
        dispatch(action)
    }
    catch( error ) {
        console.error(error)
    }
}