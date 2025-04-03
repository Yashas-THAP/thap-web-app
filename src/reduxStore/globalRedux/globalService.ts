
import { cloneDeep } from 'lodash';
import therapistStore from '../store';
import { globalActions } from '../reduxExports';
import axiosInstance from '@/service/Axios';
import { isAxiosError } from 'axios';

const url = process.env.NEXT_PUBLIC_BASE_URL



export const getTableColumnPrefrences: any = (screen: string) => {
  const currentPrefrences: ITableColumnPrefrences[] = therapistStore.getState().globalReducer.screenTableColumnPrefrences;
  return currentPrefrences?.find((item) => item.screen === screen)
};

export const setIsSidePanelExpanded:any = (value: boolean) => async (dispatch: (arg0: Partial<GlobalAction>) => void): Promise<void> => {
  const action: Partial<GlobalAction> = {
    type: globalActions.SET_IS_SIDE_PANEL_EXPANDED,
    isSidePanelExpanded: value,
  };
  dispatch(action);
}


export const updateNotes = async (id: string, notes: string, screen: string) => {
  const reqBody = {
      identifierId: id,
      identifier: screen,
      remarks: notes
  };
  try {
    const { data, status } = await axiosInstance.post(`${url}/notes/create`, reqBody);
    return { data, status };
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response) {
        const data = error.response.data;
        const status = error.response.status;
        return { data, status };
      }
    } else {
      return {
        data: 'Something went wrong', status: 400
      }
    }
  }
};

export const getPreSignedURL = async (reqBody: any) => {
  try {
    const response = await axiosInstance.post(url + '/presigned-url', reqBody);
    if (response?.status === 200 || response?.status === 201)
      return { status: 'SUCCESS', data: response?.data?.data }
    else {
      return { status: 'FAILURE' };
    }
  } catch {
    return { status: 'FAILURE' };
  }
}

 //Activity Logs
 export const fetchActivityLogs: any = (feature: any,resourceId: any) => async () => {
  try {
    const reqBody = {
      feature: feature,
      resourceId: resourceId
    }
    const response = await axiosInstance.get(url + '/log', {params: reqBody})
    if (response?.status === 200 || response?.status === 201) {
      return { status: 'SUCCESS', data: response?.data?.data }
    } else {
      return { status: 'FAILURE' };
    }
  } catch (error) {
    return { status: 'FAILURE' };
  }
}

export const sendGeoLocation: any = (reqBody: any) => async() => {
  try {
    const response = await axiosInstance.post(url + '/geolocation', reqBody);
    if (response?.status === 200 || response?.status === 201)
      return { status: 'SUCCESS' }
    else {
      return { status: 'FAILURE' };
    }
  } catch {
    return { status: 'FAILURE' };
  }
}