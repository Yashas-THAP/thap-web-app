import axios, { isAxiosError } from 'axios';

const url = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchAppointments: any = async (reqBody: any) => {
    try {
      const fetchAvailabilityResponse = await axios.get(
        url + '/stage/therapistFetchAppointments',
        reqBody
      )
      if (fetchAvailabilityResponse?.status === 200 || fetchAvailabilityResponse?.status === 201) {
        return { status: 'SUCCESS', availabilityList: fetchAvailabilityResponse?.data?.date?.availabilityList };
      }
      else {
        return { status: 'FAILURE' };
      }
    } catch {
      return { status: 'FAILURE' };
    }
  }