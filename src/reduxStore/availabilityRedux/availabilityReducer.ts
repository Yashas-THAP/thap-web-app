import { act } from 'react';
import { availabilityActions } from '../reduxExports';

const availabilityInitialState: AvailabilityState = {
    availabilityLoader: false,
    availabilityTableProps: {
        view: 'list',
        pageSize: 25,
        pageNumber: 1,
        sortOrder: 'asc',
        sortBy: 'date',
        searchTerm: ''
      },
    availability: null,
    availabilityCount: 0,
    availabilityFilter: [
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

const availabilityReducer = (state: AvailabilityState = availabilityInitialState, action: AvailabilityAction): AvailabilityState => {
    switch (action.type) {
      case availabilityActions.SET_AVAILABILITY_LOADER:
        return {
          ...state,
          availabilityLoader: action.availabilityLoader
        };
      case availabilityActions.FETCH_AVAILABILITY_DATA:
        return {
          ...state,
          availability: action.availability,
          availabilityCount: action.availabilityCount,
        }
      default:
        return state;
    }
  
  
  
  };
  
  export default availabilityReducer;