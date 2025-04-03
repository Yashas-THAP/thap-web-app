import axiosInstance from "@/service/Axios"
import { appointmentsActions } from "../reduxExports"
import therapistStore from "../store";
import axios from "axios";

const url = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchAppointments: any = (reqBody: any) => async (dispatch: (arg0: Partial<AppointmentsAction>) => void): Promise<void> => {
    try {
      const loaderStartAction: Partial<AppointmentsAction> = {
        type: appointmentsActions.SET_APPOINTMENTS_LOADER,
        appointmentsLoader: true
      }
      dispatch(loaderStartAction);
    //   const searchHash = reqBody?.search
    //   const hashAction : Partial<AppointmentsAction> = {
    //     type : appointmentsActions.SET_BOOKING_LIST_REQUEST_HASH,
    //     appointmentsListRequestHash : searchHash
    //   }
    //   dispatch(hashAction)
      const response = await axios.post(
        url + '/therapistFetchAppointments' ,
        // + new URLSearchParams({
        //   therapistId: '1'
        // }).toString(),
         reqBody,
         {params: {therapistId: 1},}
        );

      console.log('appointments response: ' + JSON.stringify(response));
      
        const action: Partial<AppointmentsAction> = {
            type: appointmentsActions.FETCH_APPOINTMENTS_DATA,
            appointments: response.data?.data?.appointments,
            appointmentsCount: response.data?.data?.totalCount,
        }
        dispatch(action);
      
      if (response?.status === 200) {
        const loaderEndAction: Partial<AppointmentsAction> = {
          type: appointmentsActions.SET_APPOINTMENTS_LOADER,
          appointmentsLoader: false
        }
        dispatch(loaderEndAction);
      }
    } catch (error) {
      const loaderEndAction: Partial<AppointmentsAction> = {
        type: appointmentsActions.SET_APPOINTMENTS_LOADER,
        appointmentsLoader: false
      }
      dispatch(loaderEndAction);
      console.error(error)
      throw error
    }
  }