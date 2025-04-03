import { act } from 'react';
import { appointmentsActions } from '../reduxExports';

const appointmentsInitialState: AppointmentsState = {
    appointmentsLoader: false,
    appointmentsTableProps: {
        view: 'list',
        pageSize: 25,
        pageNumber: 1,
        sortOrder: 'asc',
        sortBy: 'date',
        searchTerm: ''
      },
    appointments: null,
    appointmentsCount: 0,
    appointmentsFilter: [
      {
        key: 'startDate',
        value: new Date().toISOString().split("T")[0]
      },
      {
        key: 'endDate',
        value: new Date().toISOString().split("T")[0]
      },
    ]
}

const appointmentsReducer = (state: AppointmentsState = appointmentsInitialState, action: AppointmentsAction): AppointmentsState => {
    switch (action.type) {
      case appointmentsActions.SET_APPOINTMENTS_LOADER:
        return {
          ...state,
          appointmentsLoader: action.appointmentsLoader
        };
      case appointmentsActions.FETCH_APPOINTMENTS_DATA:
        return {
          ...state,
          appointments: action.appointments,
          appointmentsCount: action.appointmentsCount,
        }
      default:
        return state;
    }
  
  
  
  };
  
  export default appointmentsReducer;